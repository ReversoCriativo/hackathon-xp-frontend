import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { AuthContextProps } from '../interfaces/Authentication'

export function useAuth(): AuthContextProps {
  const context = useContext(AuthContext)

  return context
}
