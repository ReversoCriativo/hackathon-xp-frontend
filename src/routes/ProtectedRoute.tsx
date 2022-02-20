import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

function ProtectedRoute() {
  const { authenticated } = useAuth()
  const accessToken = localStorage.getItem('accessToken')
  if (!authenticated && !accessToken) {
    return <Navigate to='/login' />
  }
  return <Outlet />
}

export default ProtectedRoute
