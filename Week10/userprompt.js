// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing. 
// The question set should include at least one:

//  	- Basic input, 
//		- Password, 
//		- List, 
//		- Checkbox, 
//		- and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================

var inquirer = require('inquirer');

inquirer.prompt([

	{
		type: "input",
		message: "How much jewlery should you buy your wife?",
		name: "jewleryAmount"
	},
	{
		type: "list",
		message: "Which monster strikes the most fear into the heart of a cowboy?",
		choices: ["Frankenstein", "Vampires", "Mummies"],
		name: "monster"
	},
	{
		type: "input",
		message: "Which is most likely to relieve your loneliness?",
		choices: ["Mother Earth", "The Wind", "Your Horse"],
		name: "companion"
	},
	{
		type: ""
	}
