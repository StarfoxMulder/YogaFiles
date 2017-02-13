var http = require('http');

//define port we want to listen to
var PORT1 = 7000;
var PORT2 = 7500;

//function to handle requests and send response
function handleRequest1 (request, response) {
	index = Math.floor(Math.random()*3)+1;
		switch(index) {
			case 1:
				word = "FANTASTIC";
				break;
			case 2:
				word = "OUTSTANDING";
				break;
			case 3:
				word = "BEEEEEAUTIFUL";
				break;
		};

		response.end('You are '+word+'!!');
};

function handleRequest2 (request, response) {
	index = Math.floor(Math.random()*3)+1;
		switch(index) {
			case 1:
				word = "REALLY dumb";
				break;
			case 2:
				word = "not good :( ";
				break;
			case 3:
				word = "a lizard person";
				break;
		};

		response.end('You are '+word+'!!');
};


//create a server
var server1 = http.createServer(handleRequest1);
var server2 = http.createServer(handleRequest2);

//start our server
server1.listen(PORT1, function() {
	//this callback is triggered when a server is successfully listening
	console.log('Listening on '+PORT1);
});

server2.listen(PORT2, function() {
	//this callback is triggered when a server is successfully listening
	console.log('Listening on '+PORT2);
});