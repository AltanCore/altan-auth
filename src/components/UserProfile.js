import React from 'react';
import { useAuth } from '../AuthContext';

export function UserProfile() {
  const { service, session, loading } = useAuth();
  if (loading) return <div>Loading...</div>;
  if (!session) return <div>No user</div>;
  const user = session.user;
  return (
    <div>
      {user.user_metadata.avatar_url && <img src={user.user_metadata.avatar_url} alt="Avatar" />}
      <p>{user.email}</p>
      <button onClick={() => service.signOut()}>Sign Out</button>
    </div>
  );
}