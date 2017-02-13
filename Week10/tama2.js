var type = process.argv[2];
var action = process.argv[3];

var correctType = (type === "dog" || type === "cat");

function DigitalPal(hungry, sleepy, bored, age) {
    this.hungry = hungry;
    this.sleepy = sleepy;
    this.bored = bored;
    this.age = age;
    this.feed = function() {
        if (this.hungry) {
            console.log("That was yummy!");
            this.hungry = false;
            this.sleepy = true;
        } else {
            console.log("No thanks! I'm full.")
        }
    }
 this.increaseAge = function(){
   this.age++;
   console.log("Happy Birthday to me! I am " + this.age + " old!")
 }
    this.sleep = function() {
        if(this.sleepy) {
             console.log("Zzzzzzz");
             this.sleepy = false;
             this.bored = true;
       this.increaseAge();
        } else {
     console.log("But I\'m wide awake");
   }
    }
    this.play = function(){
        if(this.bored == true) {
            console.log("Yay! Let's Play!")
            this.bored = false;
            this.hungry = true;
        } else {
            console.log("Not right now. Later?")
        }
    }
}

var dog = new DigitalPal(false, true, true, 0);
    dog.outside = false;
    dog.bark = function() {
        console.log("Woof! Woof!")
    }
    dog.goOutside = function() {
        if(this.outside == false) {
            console.log("Yay! I love the outdoors!")
            this.outside = true;
            this.bark();
        }    else {
            console.log("Were already outside though...")
        }
    }
    dog.goInside = function(){
        if (this.outside == true) {
            console.log("Do we have to? Fine...");
            this.outside = false;
        } else {
            console.log("I'm already inside");
        }
    }


var cat = new DigitalPal(false, false, true, 0);
    cat.houseCondition = 100;
    cat.meow = function() {
        console.log("Meow! Meow!");
    }
    cat.destroyFurniture = function() {
            this.houseCondition = this.houseCondition - 10;
            console.log("MUAHAHAHAH! Take That Furniture!")
            this.bored = false;
            this.sleepy = true;

        }
    cat.buyNewFurniture = function(){
        this.houseCondition = this.houseCondition + 50;
        console.log("Are you sure about that?")
    }

var prop = (dog.hasOwnProperty(action) || cat.hasOwnProperty(action));


if(correctType && prop){
 if(type === 'dog'){
   dog[action]();
 } else {
   cat[action]();
 }
} else {
 console.log("not correct type");
}