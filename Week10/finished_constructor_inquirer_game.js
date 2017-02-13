var inquirer = require('inquirer');

function Player(name, position, offense, defense){
	this.name = name;
	this.position = position;
	this.offense = offense;
	this.defense = defense;
};

Player.prototype.GoodGame = function(){
	var coinFlip = Math.floor(Math.random() * 2);
	if(coinFlip === 1){
		if(this.offense < 10) this.offense++;
	} else {
		if(this.defense < 10) this.defense++;
	}
}

Player.prototype.BadGame = function(){
	var coinFlip = Math.floor(Math.random() * 2);
	if(coinFlip === 1){
		if(this.offense > 0) this.offense--;
	} else {
		if(this.defense > 0) this.defense--;
	}
}

Player.prototype.PrintStats = function(){
	console.log(this.name, this.position, this.offense, this.defense);
}

var currentPlayers = [];
var subs = [];
var createPlayerCount = 0;
var roundCounter = 0;
var score = 0;

var createPlayers = function() {
   if (createPlayerCount <= 8) {
       inquirer.prompt([{
           name: "name",
           message: "name:"
       }, {
           name: "position",
           message: "position:"
       }, {
           name: "offense",
           message: "offense:",
					 type: 'list',
					 choices: ['1','2','3','4','5','6','7','8','9','10'],
					 filter: function(str){
						 return Number(str);
					 }
       }, {
           name: "defense",
           message: "defense:",
					 type: 'list',
					 choices: ['1','2','3','4','5','6','7','8','9','10'],
					 filter: function(str){
						 return Number(str);
					 }
       }]).then(function(answers) {
           var newPlayer = new Player(answers.name, answers.position, answers.offense, answers.defense);
           newPlayer.PrintStats();
					 if(createPlayerCount <= 5){
						 currentPlayers.push(newPlayer);
					 } else {
						 subs.push(newPlayer);
					 }
           createPlayerCount++;
           createPlayers();
       })
   } else {
		 playGame();
   }
}

function playGame(){
	if(roundCounter <= 10){
		var randomNumber1 = Math.floor(Math.random() * 50) + 1;
		var randomNumber2 = Math.floor(Math.random() * 50) + 1;

		var currentPlayersOffense = currentPlayers.reduce(function(start, current){
			return start + current.offense;
		}, 0);

		var currentPlayersDefense = currentPlayers.reduce(function(agg, curr){
			return agg + curr.defense;
		}, 0);

		if(randomNumber1 < currentPlayersOffense) score++;
		if(randomNumber2 > currentPlayersDefense) score--;

		console.log('score: ', score);

		inquirer.prompt([{
				name: "sub",
				message: "sub a player (y/n)?"
		}]).then(function(answer) {
				if(answer.sub === 'y'){
					inquirer.prompt([{
						 name: "subOut",
						 message: "Sub out:",
						 type: 'list',
						 choices: function(){
							return currentPlayers.map(function(player){
								//we now need to make a clone of the player object so that we can store the player object as the value returned by the prompt.
								var clone = (JSON.parse(JSON.stringify(player)));
								//the reason for this is that inquirer.prompt requires that the name property of objects in the choices array to
								//be the displayed text in the terminal and the value property be the data contained in the answers object
								//that's returned after the user selects an option.

								//if we manipulated the player object directly without the clone then the objects in the original currentPlayers array would be
								//mutated and we do not want that

								clone.name = 'name: ' + player.name + ', offense: ' + player.offense + ', defense: ' + player.defense; //display value in terminal
								clone.value = player; // actual data being selected (remember this is a clone of the player object)
								return clone;
							});
						 }
					}, {
						 name: "subIn",
						 message: "Sub in:",
						 type: 'list',
						 choices: function(){
							 // we do the same thing here that we did in the subOut prompt.
							 return subs.map(function(player){
								 var clone = (JSON.parse(JSON.stringify(player)));
								 clone.name = 'name: ' + player.name + ', offense: ' + player.offense + ', defense: ' + player.defense;
								 clone.value = player;
								 return clone;
							 });
						 }
					}]).then(function(answers) {
							//we've got the two players to be subbed in and out

							var subOutPlayer = answers.subOut;
							var subInPlayer = answers.subIn;

							// now we will use a technique to find the index of an object in an array of objects.
							// var index = [1,2,3,4,5].indexOf(3); may work but
							// [{name: 'Joey', position: 'dev'}, {name: 'Bill', position: 'dev'}].indexOf('Bill') will not work
							// because indexOf cannot dive down into the objects and locate which one has a property named 'Bill';

							// we will need to map the array so that the array is only comprised of the names (strings) of each object instead of object literals
							// then we will use IndexOf to find the index of the string in the array that matches subOutPlayer.name

							var subOutIndex = currentPlayers.map(function(e) { return e.name; }).indexOf(subOutPlayer.name);

							// we do the same thing for the sub in player
							var subInIndex = subs.map(function(e) { return e.name; }).indexOf(subInPlayer.name);

							// now we will splice the subOutPlayer out of the currentPlayers array starting at the subOutIndex,
							// taking away 1 element, and replacing that element with the sub in player object
							// splice returns an array of the spliced out elements from the array;
							var subOutPlayerArray = currentPlayers.splice(subOutIndex, 1, subs[subInIndex]);

							//here we splice out the subOutPlayer from the subs array and replace it with the returned element from the currentPlayers splice.
							// since there was only one element spliced out from the currentPlayers it is in the zeroth index of the array.
							subs.splice(subInIndex, 1, subOutPlayerArray[0]);
							roundCounter++
							playGame();
					})
				} else {
					roundCounter++
					playGame();
				}
		})
	} else {
		if(score > 0){
			currentPlayers.forEach(function(player){
				player.GoodGame();
			})
			playAgainQuestion();
		} else if (score < 0) {
			currentPlayers.forEach(function(player){
				player.BadGame();
			})
			playAgainQuestion();
		} else {
			playAgainQuestion();
		}
	}
}

function playAgainQuestion(){
	inquirer.prompt([{
		 name: "playAgain",
		 message: "play again (y/n)?",
	}]).then(function(answer) {
			answer.playAgain.toLowerCase();
			if(answer.playAgain === 'y'){
				roundCounter = 0;
				score = 0;
				playGame();
			} else if (answer.playAgain === 'n'){
				console.log("Thanks for playing!");
			} else {
				console.log("U wot m8?");
			}
	})
}

// this is the funtion invocation that starts the whole thing
createPlayers();