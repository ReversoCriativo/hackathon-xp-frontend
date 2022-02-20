import { createContext, useState } from 'react'
import { NavbarProviderProps, NavbarContextProps } from '../interfaces/Navbar'
import {} from '../interfaces/User'

export const NavbarContext = createContext<NavbarContextProps>(
  {} as NavbarContextProps
)

export function NavbarProvider({ children }: NavbarProviderProps) {
  const [navLinkActive, setNavLinkActive] = useState('')

  const changeNavlink = (slug: string) => {
    setNavLinkActive(slug)
  }

  return (
    <NavbarContext.Provider value={{ navLinkActive, changeNavlink }}>
      {children}
    </NavbarContext.Provider>
  )
}
