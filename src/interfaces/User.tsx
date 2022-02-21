import { ReactNode } from 'react'

export interface UserProviderProps {
  children: ReactNode
}

export interface IBankInstitution {
  agency: string
  number: string
  bankId: string
  bankName: string
}

export interface IChecking {
  balance: number
  limit: number
}

export interface IInvestment {
  identity: string
  value: number
  bankId: string
  description: string
}

export interface IBank {
  suitability: number
  startDate: string
  institution: IBankInstitution
  checking: IChecking
  investments?: Record<string, IInvestment[]>
}

export interface UserProps {
  name: string
  cpf: string
  salary: number
  bornDate: string
  banks: IBank[]
}

export interface UserContextProps {
  accessToken: string
  investments: Record<string, IInvestment[]>[]
  user: UserProps
  isLoading: boolean
  me: () => Promise<void>
}
