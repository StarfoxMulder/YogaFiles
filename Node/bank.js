var fs = require('fs');

var actionType = process.argv[2];
var actionAmount = parseFloat(process.argv[3]);

switch(actionType) {
	case 'total':
		total();
	break;

	case 'deposit':
		deposit();
		total();
	break;

	case 'withdraw':
		withdraw();
		total();
	break;

	case 'lotto':
		lotto();
		total();
	break;

	case 'test':
		console.log(total());
	break;
}

function withdraw() {
	fs.appendFile('bank.txt', ", -"+actionAmount);

	console.log("Withdrew "+actionAmount+".  \n");
};

function deposit() {
	fs.appendFile('bank.txt', ", "+actionAmount);
	
	console.log("Deposited "+actionAmount+". \n");
};

function total() {
	fs.readFile("bank.txt", "utf8", (error, data)=> {
		if(error) {
			console.log(error);
		} else {	
			var history = data.split(', ');
			var result = 0;

			for(var i = 0; i < history.length; i++) {
				if (parseFloat(history[i])) {
					result += parseFloat(history[i]);
				}
			}
		}
		console.log("Your current balance is "+result.toFixed(2));
	});
};

function lotto() {
	fs.appendFile('bank.txt', ", -1");

	var chance = Math.floor((Math.random()*10)+1);

	if (chance === 7) {
		fs.appendFile('bank.txt', ", 5000");
		console.log("Congratulations!!! You hit it big with lucky #7!  $5000 has been added to your account."+
			" \n");
	} else {
		console.log("You didn't win this time - but you can alway try again (so long as you have at least $1 in your account -"+
			" if not, you do not have enough to purchase a ticket. \n")
	}
}