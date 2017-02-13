function digitalPal (hungry, sleepy, bored, age) {
	this.hungry = hungry;
	this.sleepy = sleepy;
	this.bored = bored;
	this.age = age;

	this.feed= function() {
		if(this.hungry == true) {
			console.log("That was yummy!");
			this.hungry = false;
			this.sleepy = true;
		} else {
			console.log("No thanks! I'm full :D");
		}
	};

	this.sleep = function() {
		if(this.sleepy == true) {
			console.log("Zzzzzzzzzz");
			this.sleepy = false;
			this.bored = true;
			this.increaseAge();
		} else {
			console.log("No Way! I'm not tired!");
		}
	};

	this.play = function() {
		if(this.bored == true) {
			console.log("Yay! Let's play!");
			this.bored = false;
			this.hungry = true;
		} else {
			console.log("Not right now. Later?");
		}
	};

	this.increaseAge = function() {
		this.age++;
		console.log("Happy Birthday to me! I am "+this.age+" old!");
	};
}

var Dog = new digitalPal(false, false, true, 2);

Dog.outside = false;
Dog.Bark = function() {console.log("Woof! Woof!");};
Dog.goOutside = function() {
					if(this.outside == false) {
						console.log("Yay! I love the outdoors!");
						this.outside = true;
						this.Bark();
					} else {
						console.log("We're already outside though...");
					}
				};
Dog.goInside = function() {
					if(this.outside == true) {
						console.log("Do we have to? Fine...");
						this.outside = false;
					} else {
						console.log("I'm already inside...");
					}
				};

var Cat = new digitalPal(false, false, true, 4);

Cat.houseCondition = 100;
Cat.meow = function() {
				console.log("Meow! Meow!");
			};
Cat.destroyFurniture = function() {
							if(this.houseCondition > 5) {
							this.houseCondition-=10;
							console.log("MUAHAHAHAHAHAH TAKE THAT FURNITURE!!");
							console.log("Your current house condition is "+this.houseCondition+". Be weary.");
							this.bored = false;
							this.sleepy = true;
							};
						};
Cat.buyNewFurniture = function() {
						this.houseCondition+=50;
						console.log("Are you sure about that?");
						this.destroyFurniture();
					  };


Dog.sleepy = true;
Dog.sleep();
Dog.sleepy = true;
Dog.sleep();


// Dog.goOutside();
// Cat.destroyFurniture();
// Dog.sleep();
// Dog.play();
// Cat.destroyFurniture();
// Dog.goInside();
// Cat.destroyFurniture();
// Dog.sleep();
// Dog.play();
// Cat.destroyFurniture();
// Dog.goInside();
// Cat.destroyFurniture();
// Dog.goInside();
// Cat.destroyFurniture();
// Cat.destroyFurniture();
// Dog.goInside();
// Cat.destroyFurniture();
// Cat.destroyFurniture();
// Dog.goOutside();
// Cat.destroyFurniture();
// Cat.destroyFurniture();
// Cat.destroyFurniture();
// Dog.goOutside();
// Dog.goInside();
// Dog.goOutside();
// console.log("Should def have a house score of 0 and destroy shouldn't work.")
// Dog.play();
// Dog.bored = true;
// Dog.play();
// Cat.destroyFurniture();
// Dog.goInside();
// Cat.destroyFurniture();
// Dog.play();
// Cat.destroyFurniture();
// Cat.destroyFurniture();
// Dog.play();
// Cat.buyNewFurniture();