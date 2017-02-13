var url = require('url');
var http = require('http');

var PORT = 8080;

var server = http.createServer(handleRequest);

server.listen(PORT, function() {
	//callback triggered when server is successfully listening
	console.log('Listening at port'+PORT);
});

//handle request and send response based on path
function handleRequest (req, res) {
	//capture the url
	var urlParts = url.parse(req.url);

	switch(urlParts.pathname) {
		case '/':
			displayRoot(urlParts.pathname, req, res);
			break;
		case '/portfolio':
			displayPortfolio(urlParts.pathname, req, res);
			break;
		default:
			display404(urlParts.pathname, req, res);
	}
};

function displayRoot(url, req, res) {
	var myHTML = '<html>';
	myHTML += '<body><h1>Home Page</h1>';
	myHTML += '<a href="/portfolio">Portfolio</a>';
	myHTML += '</body></html>';

	res.writeHead(200, {'Content-Type': 'text/html'});

	res.end(myHTML);
}

function displayPortfolio(url, req, res) {
	var myHTML = '<html>';
	myHTML += '<body><h1>Portfolio</h1>';
	myHTML += '<a href="/">Home Page</a>';
	myHTML += '</body></html>';

	res.writeHead(200, {'Content-Type': 'text/html'});

	res.end(myHTML);
}

function display404(url, req, res) {
	res.writeHead(404, {'Content-Type': 'text/html'});

	res.write('<h1>404 Not Found</h1>');
	res.end('Sorry brah - this page ain\'t real.');
}