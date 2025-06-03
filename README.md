# Altan Auth

A React authentication library for Supabase, providing simple, customizable authentication components and hooks for your React applications.

## Features

- 🔐 Complete authentication flow (sign up, sign in, sign out)
- 🔑 Email/Password authentication
- 🌐 OAuth authentication with popular providers
- 🎨 Customizable UI components
- 🪝 React hooks for auth state management
- 🔄 Session persistence and management

## Installation

```bash
npm install altan-auth
# or
yarn add altan-auth
```

## Requirements

- React 18.x
- A Supabase project with authentication enabled

## Quick Start

### 1. Setup Supabase client

```jsx
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'YOUR_SUPABASE_URL',
  'YOUR_SUPABASE_ANON_KEY'
);
```

### 2. Wrap your app with AuthProvider

```jsx
import { AuthProvider } from 'altan-auth';

function App() {
  return (
    <AuthProvider supabase={supabase}>
      <YourApp />
    </AuthProvider>
  );
}
```

### 3. Use authentication components

```jsx
import { SignInForm, SignUpForm, OAuthButton } from 'altan-auth';

function AuthPage() {
  return (
    <div>
      <h2>Sign In</h2>
      <SignInForm />
      
      <h2>Sign Up</h2>
      <SignUpForm />
      
      <h2>Or sign in with</h2>
      <OAuthButton provider="google" />
      <OAuthButton provider="github" />
    </div>
  );
}
```

### 4. Access auth state with useAuth hook

```jsx
import { useAuth } from 'altan-auth';

function Profile() {
  const { session, loading, service } = useAuth();
  
  if (loading) return <div>Loading...</div>;
  
  if (!session) {
    return <div>Please sign in to view your profile</div>;
  }
  
  return (
    <div>
      <h2>Welcome, {session.user.email}</h2>
      <button onClick={() => service.signOut()}>Sign Out</button>
    </div>
  );
}
```

## API Reference

### Components

#### `<AuthProvider>`

Provides authentication context to your app.

Props:
- `supabase` (required): Supabase client instance
- `children` (required): React children

#### `<SignInForm>`

Renders a sign-in form with email and password fields.

#### `<SignUpForm>`

Renders a sign-up form with email, password, name, and surname fields.

#### `<OAuthButton>`

Renders a button for OAuth authentication.

Props:
- `provider` (required): OAuth provider (e.g., 'google', 'github', 'facebook')

#### `<AuthWrapper>`

A higher-level component that manages auth UI states.

### Hooks

#### `useAuth()`

Returns the authentication context:
- `service`: Instance of AuthService with authentication methods
- `session`: Current session data (null if not authenticated)
- `loading`: Boolean indicating if auth state is being loaded

### AuthService Methods

- `signUp(email, password, name, surname)`: Register a new user
- `signIn(email, password)`: Sign in with email and password
- `signInWithOAuth(provider)`: Sign in with an OAuth provider
- `signOut()`: Sign out the current user
- `getSession()`: Get the current session
- `getUser()`: Get the current user
- `onAuthStateChange(callback)`: Listen for auth state changes

## Database Setup

This library expects a `users` table in your Supabase project with at least the following columns:
- `id` (uuid, primary key)
- `email` (string)
- `name` (string)
- `surname` (string)
- `verified` (boolean)

## Customization

You can customize the appearance of the authentication components using CSS. The library includes basic styles that you can override.

## Author

AltanCore

## Repository

https://github.com/AltanCore/altan-auth
