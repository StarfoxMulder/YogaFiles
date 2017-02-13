var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

//==============================================================

app.get("/api/addition/:x?/:y?", function (req, res) {
	var x = parseInt(req.params.x);
	var y = parseInt(req.params.y);

	var sum = x + y;
	res.json(sum);

});

app.get("/api/subtraction/:x?/:y?", function (req, res) {
	var x = parseInt(req.params.x);
	var y = parseInt(req.params.y);

	var sum = x - y;
	res.json(sum);
	
});

app.get("/api/multiplication/:x?/:y?", function (req, res) {
	var x = parseInt(req.params.x);
	var y = parseInt(req.params.y);

	var prod = x * y;
	res.json(prod);
	
});

app.get("/api/division/:x?/:y?", function (req, res) {
	var x = parseInt(req.params.x);
	var y = parseInt(req.params.y);

	var prod = x / y;
	res.json(prod);
	
});


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
	console.log('App listening on PORT ' + PORT);
});