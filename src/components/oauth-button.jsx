import { useState } from "react"
import { useAuth } from "../AuthContext"
import React from 'react';

export function OAuthButton({ provider, options = {}, children, className }) {
  const { service } = useAuth()
  const [isLoading, setIsLoading] = useState(false)

  const handleOAuth = async () => {
    setIsLoading(true)
    try {
      await service.signInWithOAuth(provider, options)
    } catch (err) {
      console.error("OAuth error:", err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <button
      onClick={handleOAuth}
      disabled={isLoading}
      className={`flex items-center justify-center gap-2 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed ${className || ""}`}
    >
      {provider === "google" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="4" />
          <line x1="21.17" y1="8" x2="12" y2="8" />
          <line x1="3.95" y1="6.06" x2="8.54" y2="14" />
          <line x1="10.88" y1="21.94" x2="15.46" y2="14" />
        </svg>
      )}
      {isLoading ? "Loading..." : children || `Sign in with ${provider}`}
    </button>
  )
}
