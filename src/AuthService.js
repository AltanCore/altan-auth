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
      // Build OAuth options including skipBrowserRedirect
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
  
      // Request OAuth URL
      const { data, error } = await this.supabase.auth.signInWithOAuth({ provider, options });
      if (error) throw error;
      if (!data.url) throw new Error('No OAuth URL returned');
  
      // Open popup
      const popup = window.open(
        data.url,
        `${provider}-oauth-popup`,
        'width=500,height=600,menubar=no,toolbar=no,location=no,status=no,scrollbars=yes,resizable=yes'
      );
      if (!popup) throw new Error('Popup blocked. Please allow popups and try again.');
  
      return new Promise((resolve, reject) => {
        let timeoutId = null;
        const cleanup = () => {
          window.removeEventListener('message', messageListener);
          if (timeoutId) clearTimeout(timeoutId);
          if (!popup.closed) popup.close();
        };
  
        // Listen for message from callback
        const messageListener = async (event) => {
          if (event.origin !== window.location.origin) return;
          const { data: msg } = event;
          if (msg.type === 'oauth_success' && msg.session) {
            cleanup();
            resolve(msg.session);
          } else if (msg.type === 'oauth_error') {
            cleanup();
            reject(new Error(msg.error || 'OAuth authentication failed'));
          }
        };
  
        window.addEventListener('message', messageListener);
  
        // Fallback if popup closes without response
        timeoutId = setInterval(async () => {
          if (popup.closed) {
            clearInterval(timeoutId);
            // final session check
            try {
              const { data: { session } } = await this.supabase.auth.getSession();
              cleanup();
              if (session) {
                resolve(session);
              } else {
                reject(new Error('Authentication cancelled'));
              }
            } catch (err) {
              cleanup();
              reject(new Error('Authentication error'));
            }
          }
        }, 1000);
  
        // Timeout after 5 minutes
        setTimeout(() => {
          cleanup();
          reject(new Error('Authentication timeout'));
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