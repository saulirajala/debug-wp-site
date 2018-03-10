import React, { Component } from 'react';
import leftArrow from './left-arrow.svg';
import './App.css';
import Background from './Background.js';

class App extends Component {
	render() {
		return (
			<div>
				<div className="App">
					<header className="App-header">
						<button className="btn btn-large">
							<img src={leftArrow} className="App-arrow" alt="logo"/>
							Takaisin
						</button>
					</header>
					<main className="App-main">
						<p className="App-question">
							Auttaako välimuistin tyhjennys?
						</p>
					</main>
					<footer>
						<div className="btn-group">
							<button className="btn">
								Ei
							</button>
							<button className="btn">
								Kyllä
							</button>
						</div>
					</footer>
				</div>
				<Background/>
			</div>
		);
	}
}

export default App;
