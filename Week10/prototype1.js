var inquirer = require('inquirer');

function Programmer(firstName, lastName, jobTitle, age, favLang) {
		this.firstName = firstName,
		this.lastName = lastName,
		this.jobTitle = jobTitle,
		this.age = age,
		this.favLang = favLang;
};

Programmer.prototype.printInfo = function() {
	console.log("First Name: "+this.firstName+"\nLast Name: "+this.lastName+
		"\nJob Title: "+this.jobTitle+"\nAge: "+this.age+"\nFavorite Programming Language: "+this.favLang);
};

// inquirer.prompt([
// 	{
// 		type: "choices",
// 		message: "Would you like to create another programmer?",
// 		choices: ["Yeah", new inquirer.Separator(), "Nah"],
// 		name: "makeAnother"
// 	}]).then(function(answers){

// 	})

function prompt() {
	inquirer.prompt([
		{
			type: "input",
			message: "Programmer First Name: ",
			name: "firstName"
		},
		{
			type: "input",
			message: "Programmer Last Name: ",
			name: "lastName"
		},
		{
			type: "input",
			message: "Job Title: ",
			name: "jobTitle"
		},
		{
			type: "input",
			message: "Age: ",
			name: "age"
		},
		{
			type: "input",
			message: "Favorite Programming Language: ",
			name: "favLang"
		}
	]).then(function(answers){
		var newProg = new Programmer(answers.firstName, answers.lastName, answers.jobTitle, answers.age, answers.favLang);

		newProg.printInfo();

		inquirer.prompt([
		{
			type: "choices",
			message: "Would you like to create another programmer?",
			choices: ["Yeah", new inquirer.Separator(), "Nah"],
			name: "makeAnother"
		}]).then(function(answers){
			if(answer.makeAnother == "Yeah") {
				prompt();
			} else {
				Console.log("Cool - thanks for adding some programmers!");
			}
		});
	});
};

prompt();