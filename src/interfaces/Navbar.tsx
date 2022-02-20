import { ReactNode } from 'react'

export interface NavbarProviderProps {
  children: ReactNode
}

export interface NavbarContextProps {
  navLinkActive: string
  changeNavlink: (slug: string) => void
}
