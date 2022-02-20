import { useContext } from 'react'
import { NavbarContext } from '../contexts/NavbarContext'
import { NavbarContextProps } from '../interfaces/Navbar'

export function useNavbar(): NavbarContextProps {
  const context = useContext(NavbarContext)

  return context
}
