// Initialize Firebase
var config = {
    apiKey: "AIzaSyCO3M1xkM_KHJnpbhcLaC-nM2mJbE2eVoQ",
    authDomain: "judetest-43576.firebaseapp.com",
    databaseURL: "https://judetest-43576.firebaseio.com",
    storageBucket: "judetest-43576.appspot.com",
  };
  firebase.initializeApp(config)

// Create a variable to reference the database
var database = firebase.database();

// Initial Values
var initialBid = 0;
var initialBidder = "No one :-("

var highPrice = initialBid;
var highBidder = initialBidder;

// --------------------------------------------------------------

// 
// At the initial load, get a snapshot of the current data.
database.ref().on("value", function(snapshot) {

	// If Firebase has a highPrice and highBidder stored (first case)
	if (snapshot.child("highBidder").exists() && snapshot.child("highPrice").exists()) {

		// Set the initial variables for highBidder equal to the stored values.
		highPrice = snapshot.child("highPrice").val();
		highBidder = snapshot.child("highBidder").val();

		// Change the HTML to reflect the initial value
		$('#highestBidder').html(highBidder);
		$('#highestPrice').html("$"+highPrice);

		// Print the initial data to the console.
		console.log(highPrice);
		console.log(highBidder);
	}

	// Keep the initial variables for highBidder equal to the initial values
	else{

		// Change the HTML to reflect the initial value
		$('#highestBidder').html(highBidder);
		$('#highestPrice').html("$"+highPrice);

		// Print the initial data to the console.
		console.log(highPrice);
		console.log(highBidder);
	}



// If any errors are experienced, log them to console. 
}, function (errorObject) {

  	console.log("The read failed: " + errorObject.code);

});

// --------------------------------------------------------------

// Whenever a user clicks the click button
$("#submitBid").on("click", function() {

	// Get the input values
	bidderName = $('#bidderName').val();
	bidderPrice = $('#bidderPrice').val();

	// Log the Bidder and Price (Even if not the highest)
	console.log(bidderName);
	console.log(bidderPrice);

	if(bidderPrice > highPrice) {

		// Alert 
		alert("You are now the highest bidder.");

		// Save the new price in Firebase
		database.ref().set({
			highPrice: bidderPrice
		})

		database.ref().set({
			highBidder: bidderName
		})

		// Log the new High Price
		console.log(highPrice);
		console.log(highBidder);

		// Store the new high price and bidder name as a local variable (could have also used the firebase variable)
		highPrice = bidderPrice;
		highBidder = bidderName;

		// Change the HTML to reflect the new high price and bidder
		$('#highestPrice').html(highPrice);
		$('#highestBidder').html(highBidder);

	}

	else{

		// Alert
		alert("Sorry that bid is too low. Try again.");	
	}

	// Return False to allow "enter"
	return false;
});


