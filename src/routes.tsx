import React from 'react'
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import Greetings from './Pages/Greetings';

export default function Routes() {
	return (
		<Router>
			<Switch>
				<Route path="/" element={Greetings} />
			</Switch>
		</Router>
	)
}
