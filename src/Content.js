import React from 'react';
import leftArrow from './left-arrow.svg';
import GithubLogo from './GithubLogo';
import './App.css';
import { Link } from 'react-router-dom';
import QuestionsAPI from './QuestionsAPI';


const Content = ( {match} ) => {
	let index = parseInt( match.params.number, 10 ) || 1;
	let question = QuestionsAPI.get( index );

	let getAnswer = function ( answer, default_text ) {
		answer = answer || {};
		let answer_text = answer.text || default_text;
		let answer_next_question = answer.next_question || false;
		return {text: answer_text, next_question: answer_next_question};
	};

	let answer1 = getAnswer( question.answer1, 'Kyllä' );
	let answer2 = getAnswer( question.answer2, 'Ei' );
	let answer3 = getAnswer( question.answer3, '' );
	let answer4 = getAnswer( question.answer4, '' );


	const loseFocus = node => {
		if ( node ) {
			node.blur();
		}
	};

	return (
		<div className="App">
			<header className="App-header">
				{index !== 1 &&
				 <button id="backButton" className="btn btn-large" onClick={() => {
					 document.getElementById( 'backButton' ).blur();
					 window.history.back();
				 }}>
					 <img src={leftArrow} className="App-arrow" alt="Takaisin"/>
					 Takaisin
				 </button>
				}
				<a href="https://github.com/saulirajala/debug-wp-site" target="_blank" title="See source">
					<GithubLogo />
				</a>
			</header>
			<main className="App-main">
				<p className="App-question">{question.question}</p>
			</main>
			<footer>
				<div className="btn-group">
					{answer2.next_question &&
					 <Link className="btn" to={'/debug-wp-site/' + answer2.next_question} innerRef={loseFocus}>{answer2.text}</Link>
					}
					{answer1.next_question &&
					 <Link className="btn" to={'/debug-wp-site/' + answer1.next_question} innerRef={loseFocus}>{answer1.text}</Link>
					}
					{answer3.next_question &&
					 <Link className="btn" to={'/debug-wp-site/' + answer3.next_question} innerRef={loseFocus}>{answer3.text}</Link>
					}
					{answer4.next_question &&
					 <Link className="btn" to={'/debug-wp-site/' + answer4.next_question} innerRef={loseFocus}>{answer4.text}</Link>
					}

				</div>
			</footer>
		</div>
	);
};


export default Content;