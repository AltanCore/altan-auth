import React from 'react';
import { useAuth } from "../AuthContext";

// OAuthButton.js
export function OAuthButton({ provider, options, children }) {
  const { service } = useAuth();
  
  const handleOAuth = async () => {
    try {
      await service.signInWithOAuth(provider, options);
    } catch (err) {
      console.error('OAuth error:', err);
    }
  };

  return (
    <button onClick={handleOAuth}>
      {children || `Sign in with ${provider}`}
    </button>
  );
}
