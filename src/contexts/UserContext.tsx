import { createContext, useEffect, useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import { map } from 'lodash'
import {
  IBank,
  IInvestment,
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
  const [investments, setInvestments] = useState(
    [] as Record<string, IInvestment[]>[]
  )
  const { logout } = useAuth()

  async function me() {
    setIsLoading(true)
    try {
      const { data } = await api.get('/me', {
        headers: {
          private: true,
        },
      })
      if (data) {
        const investments = map(data.banks, 'investments')
        setInvestments(investments)
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
    <UserContext.Provider
      value={{ accessToken, user, isLoading, me, investments }}
    >
      {children}
    </UserContext.Provider>
  )
}
