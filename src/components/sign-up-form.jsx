"use client"

import React from "react"
import { useState } from "react"
import { useAuth } from "../AuthContext"
import "./auth-styles.css"

export function SignUpForm({ onSuccess, onError }) {
  const { service } = useAuth()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      await service.signUp(email, password, name)
      onSuccess && onSuccess()
    } catch (err) {
      const errorMessage = err.message || "Failed to sign up"
      // Map common Supabase errors to user-friendly messages
      if (errorMessage.includes("User already registered")) {
        setError("User already registered")
      } else if (errorMessage.includes("Password should be at least")) {
        setError("Password too weak")
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
        <h1 className="auth-title">Sign up</h1>
        <p className="auth-subtitle">Create an account to get started</p>
      </div>

      <button
        onClick={async () => {
          setIsLoading(true)
          try {
            await service.signInWithOAuth("google")
            onSuccess && onSuccess()
          } catch (err) {
            setError(err.message || "Failed to sign in with Google")
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
              <span className="error-title">Sign up failed</span>
            </div>
            <div className="error-message">
              {error === "User already registered"
                ? "An account with this email already exists. Please sign in instead."
                : error === "Password too weak"
                  ? "Password should be at least 6 characters long."
                  : error}
            </div>
          </div>
        )}

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              First Name
            </label>
            <input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John"
              required
              disabled={isLoading}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="surname" className="form-label">
              Last Name
            </label>
            <input
              id="surname"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              placeholder="Doe"
              required
              disabled={isLoading}
              className="form-input"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="signup-email" className="form-label">
            Email address
          </label>
          <input
            id="signup-email"
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
          <label htmlFor="signup-password" className="form-label">
            Password
          </label>
          <input
            id="signup-password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            required
            disabled={isLoading}
            className="form-input"
          />
        </div>

        <button type="submit" disabled={isLoading} className="btn btn-primary">
          {isLoading ? (
            <>
              <span className="spinner"></span>
              Creating account...
            </>
          ) : (
            "Continue"
          )}
        </button>
      </form>
    </>
  )
}
