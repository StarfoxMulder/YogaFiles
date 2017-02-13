var players = [];
var numPlayers = 8;
var teamOffSum = 0;
var	teamDefSum = 0;
var inquirer = require('inquirer');

//Solution is similar, but smarter in having separate sub and starter arrays

function Player(playerName, position, offense, defense) {
	this.playerName = playerName,
	this.position = position,
	this.offense = offense,
	this.defense = defense,
	this.goodGame = function() {
		chance1 = Math.floor(Math.random()*2);

		if(chance == 1) {
			this.offense++;
		} else {
			this.defense++;
		}
	},
	this.badGame = function() {
		chance2 = Math.floor(Math.random()*2);

		if(chance == 1) {
			this.offense--;
		} else {
			this.defense--;
		}
	},
	this.printStats = function() {

	}
};

Player.prototype.printInfo = function() {
	console.log("Player Name: "+this.playerName+"\nPosition: "+this.position+
		"\nOffense: "+this.offense+"\nDefense: "+this.defense);
};

function createPlayers() {
	for(var i =0; i < numPlayers; i++) {
		if(i < 3){
			off = Math.floor(Math.random()*10)+1;
			def = Math.floor(Math.random()*10)+1;

			teamOffSum = teamOffSum+=off;
			teamDefSum = teamDefSum+=def;

			newPlayer = new Player("Player "+i, "Sub", off, def);
			players.push(newPlayer);

		} else {
			off = Math.floor(Math.random()*10)+1;
			def = Math.floor(Math.random()*10)+1;

			teamOffSum = teamOffSum+=off;
			teamDefSum = teamDefSum+=def;

			newPlayer = new Player("Player "+i, "Starter", off, def);
			players.push(newPlayer);

		};
	};
};

createPlayers();
console.log(players);
console.log("Offense Sum: "+teamOffSum);
console.log("Defense Sum: "+teamDefSum);

function playGame() {
	teamScore = 0;
	teamOffSum2 = teamOffSum;
	teamDefSum2 = teamDefSum;

	for(var i = 0; i < players.length; i++){
		if(players[i].position == "Sub"){
			teamOffSum2 = teamOffSum2 - players[i].offense;
		};
	};
	for(var k = 0; k < players.length; k++){
		if(players[k].position == "Sub"){
			teamDefSum2 = teamDefSum2 - players[k].defense;
		};
	};
	console.log("|| Your Current Lineup ||\nOffense: "+teamOffSum2+"\nDefense: "+teamDefSum2);

	for(var b = 0; b < 10; b++){
		roll1 = Math.floor(Math.random()*50)+1;
		roll2 = Math.floor(Math.random()*50)+1;

		if(roll1 < teamOffSum2){
			teamScore++;
			console.log("Attack "+b+": "+teamScore);
		}

		if(roll2 > teamDefSum2){
			teamScore--;
			console.log("Defend "+b+": "+teamScore);
		}

		//subQuestion();
	};

	if(teamScore > 0) {
		/*
		currentPlayers
		*/
		console.log("You lose :'(");
	} else if(teamScore < 0 ) {
		console.log("You win!");
	}
};

playGame();