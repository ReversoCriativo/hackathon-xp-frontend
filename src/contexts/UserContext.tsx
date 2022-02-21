import { createContext, useEffect, useMemo, useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import { groupBy, map, sumBy } from 'lodash'
import {
  IAggregator,
  IBank,
  IInvestment,
  UserContextProps,
  UserProps,
  UserProviderProps,
} from '../interfaces/User'
import api from '../services/api'
import { InvestmentTypeTranslate } from '../components/organisms/UserInvestmentsList'

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

  const investmentAggregator = useMemo((): IAggregator[] => {
    const result = [] as any
    investments.forEach((investment) => {
      for (const key of Object.keys(investment)) {
        result.push({
          type: String(
            (InvestmentTypeTranslate as any)[key] || key.toUpperCase()
          ),
          total: sumBy(investment[key], 'value'),
        })
      }
    })
    return result
  }, [investments])

  const aggregatorByAllBanks = useMemo(() => {
    const aggregated = []

    const groupedByType = groupBy(investmentAggregator, 'type')

    for (const key of Object.keys(groupedByType)) {
      aggregated.push({
        type: key,
        total: sumBy(groupedByType[key], 'total'),
      })
    }

    return aggregated
  }, [investmentAggregator])

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken')
    if (accessToken) {
      setAccessToken(accessToken)
      me()
    }
  }, [])

  return (
    <UserContext.Provider
      value={{ accessToken, user, isLoading, me, investments, aggregatedInvestments: aggregatorByAllBanks }}
    >
      {children}
    </UserContext.Provider>
  )
}
