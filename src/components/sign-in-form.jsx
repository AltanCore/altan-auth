import { useState } from "react"
import { useAuth } from "../AuthContext"
import React from 'react';
import "./auth-styles.css"

export function SignInForm({ onSuccess, onError }) {
  const { service } = useAuth()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      await service.signIn(email, password)
      onSuccess && onSuccess()
    } catch (err) {
      const errorMessage = err.message || "Failed to sign in"
      if (errorMessage.includes("Invalid login credentials")) {
        setError("Invalid login credentials")
      } else if (errorMessage.includes("Email not confirmed")) {
        setError("Email not confirmed")
      } else {
        setError(errorMessage)
      }
      onError && onError(err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <div className="auth-header">
        <h1 className="auth-title">Sign in</h1>
        <p className="auth-subtitle">Welcome back! Please sign in to continue</p>
      </div>

      <button
        onClick={async () => {
          setIsLoading(true)
          try {
            await service.signInWithOAuth("google")
            onSuccess && onSuccess()
          } catch (err) {
            const errorMessage = err.message || "Failed to sign in with Google"
            setError(errorMessage)
            onError && onError(err)
          } finally {
            setIsLoading(false)
          }
        }}
        className="oauth-button"
        disabled={isLoading}
      >
        <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" />
        Continue with Google
      </button>

      <div className="divider">
        <span className="divider-text">or</span>
      </div>

      <form onSubmit={handleSubmit} className="auth-form">
        {error && (
          <div className="error-container">
            <div className="error-header">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="error-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
              <span className="error-title">Authentication failed</span>
            </div>
            <div className="error-message">
              {error === "Invalid login credentials"
                ? "The email or password you entered is incorrect. Please try again."
                : error === "Email not confirmed"
                  ? "Please check your email and confirm your account before signing in."
                  : error}
            </div>
          </div>
        )}

        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@example.com"
            required
            disabled={isLoading}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            required
            disabled={isLoading}
            className="form-input"
          />
        </div>

        <button type="submit" disabled={isLoading} className="btn btn-secondary">
          {isLoading ? (
            <>
              <span className="spinner"></span>
              Signing in...
            </>
          ) : (
            "Continue"
          )}
        </button>
      </form>
    </>
  )
}
