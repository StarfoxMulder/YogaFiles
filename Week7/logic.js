// Initialize Firebase (YOUR OWN APP)
var config = {
    apiKey: "AIzaSyCO3M1xkM_KHJnpbhcLaC-nM2mJbE2eVoQ",
    authDomain: "judetest-43576.firebaseapp.com",
    databaseURL: "https://judetest-43576.firebaseio.com",
    storageBucket: "judetest-43576.appspot.com",
  };
  firebase.initializeApp(config)


// Create a variable to reference the database
var database = firebase.database();

// Use the below Initial Value 
var initialValue = 10;

// Use the below variable clickCounter to keep track of the clicks.
var clickCounter = initialValue;	

// --------------------------------------------------------------

// At the initial load, get a snapshot of the current data. (I.E FIREBASE HERE)
// HINT: Use databaseVariable.ref().on("value", function(snapshot)) {}
	database.ref().on("value", function(snapshot){

	// Inside your .on function...
	
	// Console.log the initial "snapshot" value (the object itself)
	console.log(snapshot.val());

	// Change the initial value to reflect the initial value in Firebase
	// HINT: snapshot.val().__________
	initialValue = snapshot.val().clickCount;

	// Change the value of your clickCounter to match the value in the database
	// ___________ = snapshot.val().______________________
	clickCounter = snapshot.val().clickCount;

	// Change the HTML using jquery to reflect the updated clickCounter value
	$('#clickValue').html(snapshot.val().clickCount);
	

// Then include Firebase error logging
// HINT: }, function(errorObject) 
}, function (errorObject) {
	console.log("An error happened: "+errorObject.code);
});
// --------------------------------------------------------------

// Whenever a user clicks the click button
$("#clickButton").on("click", function() {

	// Reduce the clickCounter by 1
	clickCounter--;

	// Alert User and reset the counter
	if (clickCounter <= 0 ) {
		alert("Phew! You made it! That sure was a lot of clicking.");
		initialValue = 10;
		clickCounter = initialValue;
		$('#clickValue').html(clickCounter);
	}

	// Save new value to Firebase
	database.ref().set({
		clickCount: clickCounter
	})

	// Log the value of clickCounter
	console.log(clickCounter);

});

// Whenever a user clicks the restart button
$("#restartButton").on("click", function() {

	// Set the clickCounter back to initialValue
	initialValue = 10;
	clickCounter = initialValue;
	
	// Save new value to Firebase
	database.ref().set({
		clickCount: clickCounter
	})

	// Log the value of clickCounter
	console.log(clickCounter);

	// Change the HTML Values
	$('#clickValue').html(initialValue);

});

