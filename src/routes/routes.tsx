import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from 'react-router-dom'
import { DashboardProvider } from '../contexts/DashboardContext'
import { UserProvider } from '../contexts/UserContext'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Questions from '../pages/Questions'
import ProtectedRoute from './ProtectedRoute'

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='' element={<ProtectedRoute />}>
          <Route
            path='/dashboard'
            element={
              <UserProvider>
                <DashboardProvider>
                  <Questions />
                </DashboardProvider>
              </UserProvider>
            }
          />
        </Route>
      </Switch>
    </Router>
  )
}
