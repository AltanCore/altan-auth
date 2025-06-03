import React from 'react';
import { useState } from "react"
import { SignInForm } from "./sign-in-form"
import { SignUpForm } from "./sign-up-form"
import { OAuthButton } from "./oauth-button"
import "./auth-styles.css"
export function AuthWrapper({ defaultTab = "signin", onSignInSuccess, onSignUpSuccess, onError }) {
  const [activeTab, setActiveTab] = useState(defaultTab)

  return (
    <div className="auth-wrapper">
      {activeTab === "signin" ? (
        <SignInForm onSuccess={onSignInSuccess} onError={onError} />
      ) : (
        <SignUpForm onSuccess={onSignUpSuccess} onError={onError} />
      )}

      <div className="auth-footer">
        <p className="auth-footer-text">
          {activeTab === "signin" ? (
            <>
              Don&apos;t have an account?{" "}
              <button onClick={() => setActiveTab("signup")} className="btn-link">
                Sign up
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button onClick={() => setActiveTab("signin")} className="btn-link">
                Sign in
              </button>
            </>
          )}
        </p>
      </div>

      <div className="security-footer">
        <span>Secured by</span>
        <img src="https://altan.ai/logos/horizontalBlack.png" alt="Security provider" />
      </div>
    </div>
  )
}
