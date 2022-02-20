import { createContext, useEffect, useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import {
  UserContextProps,
  UserProps,
  UserProviderProps,
} from '../interfaces/User'
import api from '../services/api'

export const UserContext = createContext<UserContextProps>(
  {} as UserContextProps
)

export function UserProvider({ children }: UserProviderProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [accessToken, setAccessToken] = useState('')
  const [user, setUser] = useState({} as UserProps)
  const { logout } = useAuth()

  async function me() {
    setIsLoading(true)
    try {
      const { data } = await api.get('/me', {
        headers: {
          private: true,
        },
      })
      console.log(data)
      if (data) {
        setUser(data)
      }
    } catch (error) {
      console.log(error)
      logout()
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken')
    if (accessToken) {
      setAccessToken(accessToken)
      me()
    }
  }, [])

  return (
    <UserContext.Provider value={{ accessToken, user, isLoading, me }}>
      {children}
    </UserContext.Provider>
  )
}
