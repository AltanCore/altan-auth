import React from 'react';
import { useState } from "react"
import { SignInForm } from "./sign-in-form"
import { SignUpForm } from "./sign-up-form"
import { OAuthButton } from "./oauth-button"

export function AuthWrapper({
  defaultTab = "signin",
  onSignInSuccess,
  onSignUpSuccess,
  onError,
  showSocialAuth = true,
}) {
  const [activeTab, setActiveTab] = useState(defaultTab)

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div className="px-6 py-4">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          {activeTab === "signin" ? "Welcome back" : "Create an account"}
        </h2>
        <p className="text-center text-gray-600 mt-1">
          {activeTab === "signin"
            ? "Enter your credentials to sign in to your account"
            : "Fill in your details to create a new account"}
        </p>
      </div>
      <div className="px-6 pb-6">
        <div className="w-full mb-6">
          <div className="grid grid-cols-2 w-full border rounded-md overflow-hidden">
            <button
              onClick={() => setActiveTab("signin")}
              className={`py-2 text-sm font-medium transition-colors ${
                activeTab === "signin" ? "bg-gray-100 text-gray-900" : "bg-white text-gray-500 hover:text-gray-700"
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setActiveTab("signup")}
              className={`py-2 text-sm font-medium transition-colors ${
                activeTab === "signup" ? "bg-gray-100 text-gray-900" : "bg-white text-gray-500 hover:text-gray-700"
              }`}
            >
              Sign Up
            </button>
          </div>
        </div>

        <div className="w-full">
          {activeTab === "signin" ? (
            <SignInForm onSuccess={onSignInSuccess} onError={onError} />
          ) : (
            <SignUpForm onSuccess={onSignUpSuccess} onError={onError} />
          )}
        </div>

        {showSocialAuth && (
          <>
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white px-2 text-sm text-gray-500">Or continue with</span>
              </div>
            </div>

            <div className="grid gap-2">
              <OAuthButton provider="google" className="w-full">
                Sign in with Google
              </OAuthButton>
            </div>
          </>
        )}

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            {activeTab === "signin" ? (
              <>
                Don't have an account?{" "}
                <button onClick={() => setActiveTab("signup")} className="text-blue-600 hover:underline">
                  Sign up
                </button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <button onClick={() => setActiveTab("signin")} className="text-blue-600 hover:underline">
                  Sign in
                </button>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  )
}
