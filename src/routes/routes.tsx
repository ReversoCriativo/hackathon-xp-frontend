import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from 'react-router-dom'
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
                <Questionns />
              </UserProvider>
            }
          />
        </Route>
      </Switch>
    </Router>
  )
}
