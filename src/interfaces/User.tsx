import { ReactNode } from 'react'

export interface UserProviderProps {
  children: ReactNode
}

export interface UserProps {
  name: string
  cpf: string
  salary: number
  bornDate: string
}

export interface UserContextProps {
  accessToken: string
  user: UserProps
  isLoading: boolean
  me: () => Promise<void>
}
