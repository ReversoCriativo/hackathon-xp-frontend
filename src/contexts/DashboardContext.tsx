import { createContext, useState } from 'react'
import {
  DashboardProviderProps,
  DashboardContextProps,
} from '../interfaces/Dashboard'
import {} from '../interfaces/User'

export const DashboardContext = createContext<DashboardContextProps>(
  {} as DashboardContextProps
)

export function DashboardProvider({ children }: DashboardProviderProps) {
  const [navbarSlugActive, setNavbarSlugActive] = useState('')

  const changeNavbarSlug = (slug: string) => {
    setNavbarSlugActive(slug)
  }

  return (
    <DashboardContext.Provider value={{ navbarSlugActive, changeNavbarSlug }}>
      {children}
    </DashboardContext.Provider>
  )
}
