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
  async signInWithOAuth(provider) {
    console.log('🔵 Starting OAuth sign-in flow for provider:', provider);
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
    console.log('🔑 Built OAuth options:', options);

    // Request the OAuth URL
    const { data, error } = await this.supabase.auth.signInWithOAuth({ provider, options });
    console.log('🔵 supabase.auth.signInWithOAuth response:', { data, error });
    if (error) {
      console.error('🔴 Error requesting OAuth URL:', error);
      throw error;
    }
    if (!data?.url) {
      console.error('🔴 No OAuth URL returned');
      throw new Error('No OAuth URL returned from Supabase');
    }

    const oauthUrl = data.url;
    const oauthOrigin = new URL(oauthUrl).origin;
    console.log('🔵 Opening OAuth popup window at URL:', oauthUrl);
    const popup = window.open(
      oauthUrl,
      `${provider}-oauth-popup`,
      'width=500,height=600,menubar=no,toolbar=no,location=no,status=no,scrollbars=yes,resizable=yes'
    );
    if (!popup) {
      console.error('🔴 Popup blocked');
      throw new Error('Popup blocked. Please allow popups and try again.');
    }
    console.log('🔵 Popup opened successfully');

    return new Promise((resolve, reject) => {
      let checkInterval = null;
      let authSub = null;
      let resolved = false;

      const cleanup = () => {
        console.log('🔵 Cleaning up listeners and popup');
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
          console.log('🔵 Popup closed by cleanup');
        }
      };

      const finish = (session) => {
        if (resolved) return;
        resolved = true;
        console.log('🟢 OAuth flow succeeded, provider:', provider, 'user:', session.user?.email);
        cleanup();
        resolve({ session, provider });
      };

      const fail = (errMsg) => {
        if (resolved) return;
        resolved = true;
        console.error('🔴 OAuth flow failed:', errMsg);
        cleanup();
        reject(new Error(errMsg));
      };

      // 1) Listen for Supabase auth state changes (SIGN_IN event)
      authSub = this.supabase.auth.onAuthStateChange((event, session) => {
        console.log('🔵 onAuthStateChange event:', event, 'session:', session);
        if (event === 'SIGNED_IN' && session) {
          finish(session);
        }
      });

      // 2) Listen for postMessage from the popup
      const onMessage = async (event) => {
        console.log('🔵 Message received from popup:', event.origin, event.data);
        const msg = event.data;
        if (!msg || typeof msg !== 'object') return;

        // Direct token response: always accept
        if (msg.access_token && msg.user) {
          console.log('🟢 Received direct token response');
          const session = {
            access_token: msg.access_token,
            refresh_token: msg.refresh_token,
            user: msg.user,
            expires_in: msg.expires_in ?? 3600,
            token_type: msg.token_type ?? 'bearer',
          };
          console.log('🔑 Constructed session from token response:', session);
          try {
            await this.supabase.auth.setSession({
              access_token: msg.access_token,
              refresh_token: msg.refresh_token,
            });
            console.log('🟢 Session set in Supabase client');
          } catch (e) {
            console.warn('⚠️ Failed to set session in Supabase client:', e);
          }
          finish(session);
          return;
        }

        // Structured messages: validate origin
        if (event.origin !== window.location.origin && event.origin !== oauthOrigin) return;

        if (msg.type === 'oauth_success' && msg.session) {
          console.log('🟢 Received oauth_success message');
          finish(msg.session);
        } else if (msg.type === 'oauth_error') {
          console.log('🔴 Received oauth_error message');
          fail(msg.error || 'OAuth authentication failed');
        }
      };
      window.addEventListener('message', onMessage);

      // 3) Poll for popup close / final session check
      checkInterval = setInterval(async () => {
        if (popup.closed) {
          console.log('🔵 Popup detected as closed, checking final session');
          clearInterval(checkInterval);
          try {
            const { data: { session } } = await this.supabase.auth.getSession();
            console.log('🔑 Final session check result:', session);
            if (session) {
              finish(session);
            } else {
              fail('Authentication was cancelled');
            }
          } catch (e) {
            console.error('🔴 Final session check error:', e);
            fail('Final authentication check failed');
          }
        }
      }, 1000);

      // 4) Overall timeout (5 minutes)
      setTimeout(() => {
        console.error('🔴 Authentication timeout reached');
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