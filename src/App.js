import React, { Component } from 'react';
import leftArrow from './left-arrow.svg';
import './App.css';
import Background from './Background.js';

class App extends Component {
	constructor() {
		super();
		this.state = {question: '', all_questions: []};
	}

	componentWillMount() {
		let all_questions = [
			{},
			{
				question: 'Auttaako välimuistin tyhjennys?',
				answer1: {next_question: 21},
				answer2: {next_question: 2},
			},
			{
				question: 'Tuleeko tuotannossa selaimen konsoliin mitään?',
				answer1: {next_question: 22},
				answer2: {next_question: 3},
			},
			{
				question: 'Tuleeko tuotannon error lokiin mitään?',
				answer1: {next_question: 23},
				answer2: {next_question: 4},
			},
			{
				question: 'Toistuuko ongelma kaikissa selaimissa?',
				answer1: {next_question: 5},
				answer2: {next_question: 5},
			},
			{
				question: 'Toistuuko ongelma kehitysympäristössä?',
				answer1: {next_question: 10},
				answer2: {next_question: 6}
			},
			{
				question: 'Onko kehitysympäristön koodi ajantasalla?',
				answer1: {next_question: 7},
				answer2: {next_question: 7}
			},
			{
				question: 'Onko kehitysympäristössä sama versio WP:stä?',
				answer1: {next_question: 8},
				answer2: {next_question: 8}
			},
			{
				question: 'Onko kehitysympäristössä ajantasainen tietokanta?',
				answer1: {next_question: 9},
				answer2: {next_question: 9}
			},
			{
				question: 'Toistuuko ongelma nyt kehitysympärisössä?',
				answer1: {next_question: 10},
				answer2: {next_question: 22}
			},
			{
				question: 'Tiedätkö kuka on syyllinen?',
				teema: 'Teema => 14',
				plugins: 'Plugarit => 11',
				core: 'Core => 14',
				answer2: 'En => 13',
			},
			{
				question: 'Tiedätkö missä plugarissa vika on?',
				answer1: {next_question: 14},
				answer2: {next_question: 12},
			},
			{
				question: 'Ota plugari kerrallaan pois päältä => saat tietää missä plugarissa vika',
				answer1: {text: 'Plugari selvitetty', next_question: 14}
			},
			{
				question: 'Ota vuorotellen teema, mu-plugins ja plugins pois päältä',
				answer1: {text: 'Löysin syyllisen', next_question: 10}
			},
			{
				question: 'Auttaisiko lisäosan/Coren/teeman päivitys?',
				answer1: {next_question: 24},
				answer2: {text: 'Ei/ei oo tullut päivityksiä', next_question: 15},
			},
			{
				question: 'Onko homma toiminut aiemmin?',
				answer1: {text: 'Kyllä/EOS', next_question: 16},
				answer2: {next_question: 18},
			},
			{
				question: 'Etsi gitin, composerin tai wp clin avulla versio, jossa homma toimi.',
				answer1: {text: 'Löytyi!', next_question: 17},
				answer2: {text: 'Ei oo tainnut toimia koskaan…', next_question: 18},
			},
			{
				question: 'Mitä on muuttunut?',
				answer1: {text: 'Liikaa!', next_question: 18},
				answer2: {text: 'Aa, tämä muutos aiheutti ongelman!', next_question: 20},
			},
			{
				question: 'Onko ongelma frontissa vai backendissä?',
				answer1: {text: 'Frontti/admin', next_question: 19},
				answer2: {text: 'Enemmän backendin juttuja', next_question: 19},
			},
			{
				question: 'Hae koodista sopivilla hakusanoilla.Esim.HTML:n seassa olevilla classin nimillä, tms.Löytyikö vikakohta?',
				answer1: {next_question: 20},
				answer2: {text: 'Sorry I\'m out of ideas!'}
			},
			{
				question: 'Onneksi olkoon! 🎉 Löysit ongelman juurisyyn.Enää pitäisi vain korjata se… Jos kyseessä on selkeä bugi, lähetä bugiraportti kehittäjälle.',
			},
			{
				question: 'Loistavaa! Sait ongelman korjattua!',
			},
			{
				question: 'Johdattaako virheviesti syyllisen jäljille?',
				answer1: {next_question: 10},
				answer2: {next_question: 3}
			},
			{
				question: 'Johdattaako error loki syyllisen jäljille?',
				answer1: {next_question: 10},
				answer2: {next_question: 4}
			},
			{
				question: 'Tyhjensitkö varmasti välimuistin tuotannosta?',
				answer1: {next_question: 10},
				answer2: {text: 'No en.Luulin, ettei se nyt siitä voi johtua', next_question: 23},
			},
			{
				question: 'Auttoiko välimuistin tyhjennys?',
				answer1: {text: 'Olisko kannattanut heti tyhjentää', next_question: 10},
				answer2: {next_question: 10},
			},
			{
				question: 'Onneksi olkoon! 🎉 Sait ongelman korjattua! Ei muuta kuin koodit tuotantoon, leuka rintaan ja kohti uusia haasteita 💪'
			},
		];
		this.setState( {
			all_questions: all_questions,
			question: all_questions[1],
		} );
	}

	getQuestion( elem ) {
		console.log( elem ); // id of next_question
		this.setState( {
			question: this.state.all_questions[elem]
		} );
	}

	render() {
		let question = this.state.question;
		let answer1 = this.get_answer( question.answer1, 'Kyllä' );
		let answer2 = this.get_answer( question.answer2, 'Ei' );
		return (
			<div>
				<div className="App">
					<header className="App-header">
						<button className="btn btn-large">
							<img src={leftArrow} className="App-arrow" alt="Takaisin"/>
							Takaisin
						</button>
					</header>
					<main className="App-main">
						<p className="App-question">{question.question}</p>
					</main>
					<footer>
						<div className="btn-group">
							{answer2.next_question &&
							 <button className="btn" onClick={this.getQuestion.bind( this, answer2.next_question )}>
								 {answer2.text}
							 </button>
							}
							{answer1.next_question &&
							 <button className="btn" onClick={this.getQuestion.bind( this, answer1.next_question )}>
								 {answer1.text}
							 </button>
							}
						</div>
					</footer>
				</div>
				<Background/>
			</div>
		);
	}

	get_answer( answer, default_text ) {
		answer = answer || {};
		let answer_text = answer.text || default_text;
		let answer_next_question = answer.next_question || false;
		return {text: answer_text, next_question: answer_next_question};
	}
}

export default App;
