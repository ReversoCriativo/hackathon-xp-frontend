import React, { createContext, ReactNode, useState } from 'react'
import {
  AuthContextProps,
  AuthProviderProps,
} from '../interfaces/Authentication'

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
)

export function AuthProvider({ children }: AuthProviderProps) {
  const [authenticated, setAuthenticated] = useState(false)

  async function handleLogin() {
    setAuthenticated(true)
  }

  return (
    <AuthContext.Provider value={{ authenticated }}>
      {children}
    </AuthContext.Provider>
  )
}
