'use strict';  //A command which prevents running the code at all if there are any 
			   //	undeclaired variables within the file. 

var dogs = {
	raining: true,
	noise: "Woof!",
	makeNoise: function(){
		if (dogs.raining == true) {
		console.log(dogs.noise);
		}
	}
}

var cats = {
	raining: true,
	noise: "Meow!",
	makeNoise: function() {
		if(cats.raining == true) {
			console.log(cats.noise)
		}
	}
}

function massHysteria() {
	if(cats.raining == true && dogs.raining == true) {
		console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!");
	}
}


dogs.makeNoise();
cats.makeNoise();
massHysteria();