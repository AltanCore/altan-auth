import React from "react"
import { useState } from "react"
import { createRoot } from "react-dom/client"
import { createClient } from "@supabase/supabase-js"
import { AuthProvider, useAuth } from "../AuthContext"
import { AuthWrapper } from "../components/auth-wrapper"

const supabaseUrl = "https://api.altan.ai/tables/v2"
const supabaseKey = "tenant_202fe760_2a7a_4972_9c36_a39d11fe70a0"

const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
    storage: window.localStorage,
    storageKey: "altan-auth-token",
    flowType: "pkce",
  },
  global: {
    headers: {
      apikey: supabaseKey,
      Authorization: `Bearer ${supabaseKey}`,
    },
  },
})

function AuthContainer() {
  console.log("Supabase client initialized:", supabase)
  const { session } = useAuth()
  const [authMessage, setAuthMessage] = useState("")

  const handleSignInSuccess = () => {
    setAuthMessage("Successfully signed in!")
    console.log("User signed in successfully")
  }

  const handleSignUpSuccess = () => {
    setAuthMessage("Account created successfully! Please check your email for verification.")
    console.log("User registered successfully")
  }

  const handleError = (error) => {
    setAuthMessage(`Error: ${error.message}`)
    console.error("Authentication error:", error)
  }

  return (
    <div className="container mx-auto p-4">
      {authMessage && (
        <div
          className={`p-4 mb-4 rounded-md ${authMessage.includes("Error") ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"}`}
        >
          {authMessage}
        </div>
      )}

      {session ? (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Welcome, {session.user.email}</h2>
          <p className="mb-4">You are now signed in.</p>
          <button
            onClick={async () => {
              try {
                await supabase.auth.signOut()
                setAuthMessage("Signed out successfully")
              } catch (error) {
                setAuthMessage(`Error signing out: ${error.message}`)
              }
            }}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <AuthWrapper
          defaultTab="signin"
          onSignInSuccess={handleSignInSuccess}
          onSignUpSuccess={handleSignUpSuccess}
          onError={handleError}
          showSocialAuth={true}
        />
      )}
    </div>
  )
}

function App() {
  return (
    <AuthProvider supabase={supabase}>
      <AuthContainer />
    </AuthProvider>
  )
}


const container = document.getElementById("root")
const root = createRoot(container)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)