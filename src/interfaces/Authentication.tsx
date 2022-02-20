import { ReactNode } from 'react'

export interface AuthProviderProps {
  children: ReactNode
}
export interface AuthContextProps {
  authenticated: boolean
  isLoading: boolean
  login: (name: string) => Promise<boolean>
  logout: () => Promise<void>
}
