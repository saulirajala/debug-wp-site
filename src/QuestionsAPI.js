import data from './questions.json';

const QuestionsAPI = {
	all_questions: data,
	all: function () {
		return this.all_questions;
	},
	get: function ( id ) {
		return this.all_questions[id];
	}
};

export default QuestionsAPI;