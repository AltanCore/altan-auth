import React, { useState } from 'react';
import { useAuth } from '../AuthContext';

export function SignInForm({ onSuccess, onError }) {
  const { service } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await service.signIn(email, password);
      onSuccess && onSuccess();
    } catch (err) {
      onError && onError(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required />
      <button type="submit">Sign In</button>
    </form>
  );
}
