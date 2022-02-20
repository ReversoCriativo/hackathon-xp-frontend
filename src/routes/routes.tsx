import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import ProtectedRoute from './ProtectedRoute'

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='' element={<ProtectedRoute />}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
      </Switch>
    </Router>
  )
}
