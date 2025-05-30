export class AuthService {
  constructor(supabase) {
    this.supabase = supabase;
  }

  // Sign up with email and password
  async signUp(email, password, name = '', surname = '') {
    const { data, error } = await this.supabase.auth.signUp({ email, password });
    if (error) throw error;

    // If signup successful, create user profile
    if (data.user) {
      await this.supabase.from('users').insert({
        id: data.user.id,
        email,
        name,
        surname,
        verified: false,
      });
    }

    return data;
  }

  // Sign in with email and password
  async signIn(email, password) {
    const { data, error } = await this.supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
    return data;
  }

  /**
   * Sign in with OAuth provider via popup
   * Returns a promise resolving to { session, provider } on success
   */
  /**
   * Sign in with OAuth provider via popup
   * Returns a promise resolving to { session, provider } on success
   */
  async signInWithOAuth(provider) {
    const options = {
      redirectTo: `${window.location.origin}/auth/callback`,
      queryParams: {
        access_type: 'offline',
        prompt: 'consent',
        base_id: this.supabase.supabaseKey,
      },
      scopes: 'email profile',
      skipBrowserRedirect: true,
    };

    // Request the OAuth URL
    const { data, error } = await this.supabase.auth.signInWithOAuth({ provider, options });
    if (error) throw error;
    if (!data?.url) throw new Error('No OAuth URL returned from Supabase');

    // Open the popup window
    const popup = window.open(
      data.url,
      `${provider}-oauth-popup`,
      'width=500,height=600,menubar=no,toolbar=no,location=no,status=no,scrollbars=yes,resizable=yes'
    );
    if (!popup) throw new Error('Popup blocked. Please allow popups and try again.');

    return new Promise((resolve, reject) => {
      let checkInterval = null;
      let authSub = null;
      let resolved = false;

      const cleanup = () => {
        if (authSub) {
          authSub.data.subscription.unsubscribe();
          authSub = null;
        }
        window.removeEventListener('message', onMessage);
        if (checkInterval) {
          clearInterval(checkInterval);
          checkInterval = null;
        }
        if (!popup.closed) {
          popup.close();
        }
      };

      const finish = (session) => {
        if (resolved) return;
        resolved = true;
        cleanup();
        resolve({ session, provider });
      };

      const fail = (errMsg) => {
        if (resolved) return;
        resolved = true;
        cleanup();
        reject(new Error(errMsg));
      };

      // 1) Listen for Supabase auth state changes (SIGN_IN event)
      authSub = this.supabase.auth.onAuthStateChange((event, session) => {
        if (event === 'SIGNED_IN' && session) {
          finish(session);
        }
      });

      // 2) Listen for postMessage from the popup
      const onMessage = async (event) => {
        if (event.origin !== window.location.origin) return;

        const msg = event.data;
        if (!msg || typeof msg !== 'object') return;

        // Structured success message
        if (msg.type === 'oauth_success' && msg.session) {
          finish(msg.session);
        }
        // Structured error message
        else if (msg.type === 'oauth_error') {
          fail(msg.error || 'OAuth authentication failed');
        }
        // Direct token response
        else if (msg.access_token && msg.user) {
          const session = {
            access_token: msg.access_token,
            refresh_token: msg.refresh_token,
            user: msg.user,
            expires_in: msg.expires_in ?? 3600,
            token_type: msg.token_type ?? 'bearer',
          };
          try {
            await this.supabase.auth.setSession({
              access_token: msg.access_token,
              refresh_token: msg.refresh_token,
            });
          } catch {
            // ignore setSession errors
          }
          finish(session);
        }
      };
      window.addEventListener('message', onMessage);

      // 3) Poll for popup close / final session check
      checkInterval = setInterval(async () => {
        if (popup.closed) {
          clearInterval(checkInterval);
          try {
            const { data: { session } } = await this.supabase.auth.getSession();
            if (session) {
              finish(session);
            } else {
              fail('Authentication was cancelled');
            }
          } catch {
            fail('Final authentication check failed');
          }
        }
      }, 1000);

      // 4) Overall timeout (5 minutes)
      setTimeout(() => {
        fail('Authentication timeout');
      }, 5 * 60 * 1000);
    });
  }

  // Sign out
  async signOut() {
    const { error } = await this.supabase.auth.signOut();
    if (error) throw error;
  }

  // Get current session
  getSession() {
    return this.supabase.auth.getSession();
  }

  // Get current user
  getUser() {
    return this.supabase.auth.getUser();
  }

  // Listen auth state changes
  onAuthStateChange(callback) {
    return this.supabase.auth.onAuthStateChange((event, session) => callback(event, session));
  }
}