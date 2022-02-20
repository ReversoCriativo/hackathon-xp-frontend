import { ReactNode } from 'react'

export interface DashboardProviderProps {
  children: ReactNode
}

export interface DashboardContextProps {
  navbarSlugActive: string
  changeNavbarSlug: (slug: string) => void
}
