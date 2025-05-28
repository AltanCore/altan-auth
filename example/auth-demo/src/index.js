import React from 'react';
import ReactDOM from 'react-dom';
import { createClient } from '@supabase/supabase-js';
import { AuthProvider, SignInForm, SignUpForm, OAuthButton, UserProfile } from 'react-supabase-auth-ui';

const supabaseUrl = 'https://api.altan.ai/tables/v2';
const supabaseKey = 'tenant_202fe760_2a7a_4972_9c36_a39d11fe70a0';


const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
    storage: window.localStorage, 
    storageKey: 'altan-auth-token', 
    flowType: 'pkce', 
  },
  global: {
    headers: {
      'apikey': supabaseKey,
      'Authorization': `Bearer ${supabaseKey}`,
    },
  },
});

function App() {
  return (
    <AuthProvider supabase={supabase}>
      <h1>Auth Demo</h1>
      <SignUpForm onSuccess={() => console.log('Registered')} onError={console.error} />
      <SignInForm onSuccess={() => console.log('Signed In')} onError={console.error} />
      <OAuthButton provider="google">Sign in with Google</OAuthButton>
      <UserProfile />
    </AuthProvider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
