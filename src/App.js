import React, { Component } from 'react';
import leftArrow from './left-arrow.svg';
import './App.css';
import Background from './Background.js';
import data from './questions.json';

class App extends Component {
	constructor() {
		super();
		this.state = {question: '', all_questions: [], previous_question: []};
	}

	componentWillMount() {
		let all_questions = data;
		this.setState( {
			all_questions: all_questions,
			question: all_questions[1],
			previous_question: [],
		} );
	}

	getNextQuestion( elem, id_of_button ) {
		this.refs[id_of_button].blur();
		this.setState( {
			previous_question: [...this.state.previous_question, this.state.question],
			question: this.state.all_questions[elem]
		} );
	}

	getPreviousQuestion( id_of_button ) {
		this.refs[id_of_button].blur();
		this.setState( {
			previous_question: this.state.previous_question.slice( 0, this.state.previous_question.length - 1 ),
			question: this.state.previous_question.slice( this.state.previous_question.length - 1 )[0]
		} );
	}

	render() {
		let question = this.state.question;
		let answer1 = this.get_answer( question.answer1, 'Kyllä' );
		let answer2 = this.get_answer( question.answer2, 'Ei' );
		let answer3 = this.get_answer( question.answer3, '' );
		let answer4 = this.get_answer( question.answer4, '' );
		return (
			<div>
				<div className="App">
					<header className="App-header">
						{this.state.previous_question.length !== 0 &&
						 <button className="btn btn-large" onClick={this.getPreviousQuestion.bind( this, "backButton" )}
						         ref="backButton">
							 <img src={leftArrow} className="App-arrow" alt="Takaisin"/>
							 Takaisin
						 </button>
						}
					</header>
					<main className="App-main">
						<p className="App-question">{question.question}</p>
					</main>
					<footer>
						<div className="btn-group">
							{answer2.next_question &&
							 <button className="btn" onClick={this.getNextQuestion.bind( this, answer2.next_question, 'answer2' )}
							         ref="answer2">
								 {answer2.text}
							 </button>
							}
							{answer1.next_question &&
							 <button className="btn" onClick={this.getNextQuestion.bind( this, answer1.next_question, 'answer1' )}
							         ref="answer1">
								 {answer1.text}
							 </button>
							}
							{answer3.next_question &&
							 <button className="btn" onClick={this.getNextQuestion.bind( this, answer3.next_question, 'answer3' )}
							         ref="answer3">
								 {answer3.text}
							 </button>
							}
							{answer4.next_question &&
							 <button className="btn" onClick={this.getNextQuestion.bind( this, answer4.next_question, 'answer4' )}
							         ref="answer4">
								 {answer4.text}
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
