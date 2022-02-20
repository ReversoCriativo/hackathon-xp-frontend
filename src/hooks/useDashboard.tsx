import { useContext } from 'react'
import { DashboardContext } from '../contexts/DashboardContext'
import { DashboardContextProps } from '../interfaces/Dashboard'

export function useDashboard(): DashboardContextProps {
  const context = useContext(DashboardContext)

  return context
}
