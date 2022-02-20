import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import { UserContextProps } from '../interfaces/User'

export function useUser(): UserContextProps {
  const context = useContext(UserContext)

  return context
}
