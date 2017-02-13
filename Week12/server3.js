// Requiring dependencies
var http = require('http');
var url = require('url');
var fs = require('fs');

// Set our port to 8080
var PORT = 8080;

var server = http.createServer(handleRequest);

function handleRequest(req, res){

	var urlParts = url.parse(req.url);

	switch(urlParts.pathname) {
		case '/':
			displayHome(urlParts.pathname, req, res);
			break;
		case '/food':
			displayFood(urlParts.pathname, req, res);
			break;
		case '/movie':
			displayMovie(urlParts.pathname, req, res);
			break;
		case '/frame':
			displayFrame(urlParts.pathname, req, res);
			break;
		default:
			display404(urlParts.pathname, req, res);
	}
};

function displayHome(url, req, res) {
	fs.readFile("homeT.html", function(err, data){
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end(data);
	});

}

function displayFood(url, req, res) {
	fs.readFile("foodT.html", function(err, data){
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end(data);
	});

}

function displayMovie(url, req, res) {
	fs.readFile("movieT.html", function(err, data){
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end(data);
	});

}

function displayFrame(url, req, res) {
	fs.readFile("frameT.html", function(err, data){
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end(data);
	});

}

function display404(url, req, res) {
	res.writeHead(404, {'Content-Type': 'text/html'});

	res.write('<h1>404 Not Found</h1>');
	res.end('Sorry brah - this page ain\'t real.');
}

// Starts our server.
server.listen(PORT, function(){
    console.log("Server is listening on PORT: " + PORT);
});


