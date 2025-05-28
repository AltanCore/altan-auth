import React, { createContext, useContext, useEffect, useState } from 'react';
import { AuthService } from './AuthService';



const AuthContext = createContext();

export function AuthProvider({ supabase, children }) {
  const [service] = useState(() => new AuthService(supabase));
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    service.getSession().then(({ data, error }) => {
      if (error) {
        console.error('Error getting session:', error);
        setSession(null);
      } else {
        setSession(data?.session ?? null);
      }
      setLoading(false);
    });

    const { data: { subscription } } = service.onAuthStateChange((event, session) => {
      switch (event) {
        case 'SIGNED_IN':
        case 'TOKEN_REFRESHED':
          setSession(session);
          break;
        case 'SIGNED_OUT':
          setSession(null);
          break;
        default:
          break;
      }
      setLoading(false);
    });

    return () => {
      if (subscription) {
        subscription.unsubscribe();
      }
    };
  }, [service]);

  return (
    <AuthContext.Provider value={{ service, session, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return ctx;
}
