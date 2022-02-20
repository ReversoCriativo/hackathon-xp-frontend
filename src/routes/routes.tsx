import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from 'react-router-dom'
import { InvestmentsProvider } from '../contexts/Investments'
import { UserProvider } from '../contexts/UserContext'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Questionns from '../pages/Questions'
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
                <InvestmentsProvider>
                  <Questionns />
                </InvestmentsProvider>
              </UserProvider>
            }
          />
        </Route>
      </Switch>
    </Router>
  )
}
