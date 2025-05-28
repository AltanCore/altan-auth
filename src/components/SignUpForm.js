import React, { useState } from 'react';
import { useAuth } from '../AuthContext';

export function SignUpForm({ onSuccess, onError }) {
  const { service } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await service.signUp(email, password, name, surname);
      onSuccess && onSuccess();
    } catch (err) {
      onError && onError(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
      <input value={surname} onChange={e => setSurname(e.target.value)} placeholder="Surname" />
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required />
      <button type="submit">Sign Up</button>
    </form>
  );
}