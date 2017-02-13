var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3306;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));


app.get("/api/", function (req, res) {
		connection.query('SELECT * FROM aliens', function(err, res) {
			var html = '<h1> ALIENS!!!! </h1>';

			html+='<ul>';

			for(var i=0; i <res.length; i++){
				html+= '<li><p> Name: '+ res[i].name + '</p>';
				html+= '<p> Species: '+res[i].species +'</p>';
			}
			html+= '</ul>';

			res.send(html);
		});
});

console.log("Listening on port: "+PORT);

// attempt at 14.3 activity