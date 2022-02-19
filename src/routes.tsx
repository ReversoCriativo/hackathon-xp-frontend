import React from 'react'
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import Home from './Pages/Home';

export default function Routes() {
	return (
		<Router>
			<Switch>
				<Route path="/" element={Home} />
			</Switch>
		</Router>
	)
}
