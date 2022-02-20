import { createContext, useState } from 'react'
import {
  AuthContextProps,
  AuthProviderProps,
} from '../interfaces/Authentication'
import api from '../services/api'

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
)

export function AuthProvider({ children }: AuthProviderProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [authenticated, setAuthenticated] = useState(false)

  async function login(name: string) {
    setIsLoading(true)
    try {
      const { data } = await api.post('/auth/login', {
        user: name.toUpperCase(),
      })
      if (data) {
        setAuthenticated(true)
        return true
      }

      return false
    } catch (error) {
      console.log(error)
      return false
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <AuthContext.Provider value={{ authenticated, login, isLoading }}>
      {children}
    </AuthContext.Provider>
  )
}
