var char = process.argv[2];
var action = process.argv[3];
var enemy = process.argv[4];

function Character(name, profession, gender, age, strength, hitPoints) {
	this.name = name;
	this.profession = profession;
	this.gender = gender;
	this.age = age;
	this.strength = strength;
	this.hitPoints = hitPoints;
	this.PrintStats = function() {
		console.log(this.name);
		console.log(this.profession);
		console.log(this.gender);
		console.log(this.age);
		console.log(this.strength);
		console.log(this.hitPoints);
	};
	this.isAlive = function() {
		if(this.hitPoints > 0){
			console.log(this.name+" is still alive!");
		}
	};
	this.attack = function(target) {
		target.hitPoints = target.hitPoints - this.strength;
			console.log(this.name+" attacks "+target.name+" for "+this.strength+" points. \n"+
				target.name+" has "+target.hitPoints+" HP remaining.");
			target.isAlive();
	};
	this.levelUp = function() {
		this.age++;
		this.strength+=100;
		this.hitPoints+=250;
	};
};


var Ashtar = new Character("Ashtar", "Commander", "Cis Nordic Male", "Unknown", 450, 1962);
var Jesus = new Character("Jesus Sananda", "Our Lord and Savior", "Cis Nordic Male", 2020, 375, 1773);
var Monka = new Character("Monka", "Monka", "Monka", "Monka", 1200, 2400);

function battle(char, action, enemy) {
	switch(char) {
		case Ashtar:
		Ashtar.action(enemy);
		break;

		case Jesus:
		Ashtar.action(enemy);
		break;

		case Monka:
		Ashtar.action(enemy);
		break;
	}
};