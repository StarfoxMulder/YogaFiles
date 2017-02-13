//http module require
var http = require('http');

//define port we want to listen to
var PORT = 8080;

//function to handle requests and send response
function handleRequest (request, response) {
	response.end('We made it everyone! This was your URL:'+request.url);
};

//create a server
var server = http.createServer(handleRequest);

//start our server
server.listen(PORT, function() {
	//this callback is triggered when a server is successfully listening
	console.log('Server listening on port', PORT);
});

//node server.js
//then open the browser and go to localhost:8080
//You can see the console log there!!