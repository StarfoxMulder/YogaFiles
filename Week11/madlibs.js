var inquirer = require('inquirer');

var adjectives = [];
var nouns = [];
var verbs = [];

function prompt() {
	inquirer.prompt([
		{
			type: 'input',
			message: 'Enter a Proper Noun: ',
			name: 'noun0'
		},
		{
			type: 'input',
			message: 'Enter a Verb: ',
			name: 'verb0'
		},
		{
			type: 'input',
			message: 'Enter an Adjective: ',
			name: 'adjective0'
		},
		{
			type: 'input',
			message: 'Enter a Noun: ',
			name: 'noun1'
		},
		{
			type: 'input',
			message: 'Enter an Adjective: ',
			name: 'adjective1'
		},
		{
			type: 'input',
			message: 'Enter a Verb: ',
			name: 'verb1'
		}
	]).then(function(answers){
		nouns.push(answers.noun0);
		verbs.push(answers.verb0);
		adjectives.push(answers.adjective0);
		nouns.push(answers.noun1);
		adjectives.push(answers.adjective1);
		verbs.push(answers.verb1);
		console.log(nouns[0]+" "+verbs[0]+" "+adjectives[0]+".  "+nouns[1]+" "+adjectives[1]+" "+verbs[1]+".");
	})
}

prompt();
