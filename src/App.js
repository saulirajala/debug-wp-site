import React, { Component } from 'react';
import './App.css';
import Background from './Background.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Content from './Content';

class App extends Component {


	render() {

		return (
			<Router>
				<div>
					<Switch>
						<Route exact path="/:number" component={Content}/>
						<Route component={Content}/>
					</Switch>
					<Background/>
				</div>
			</Router>
		);
	}


}

export default App;
