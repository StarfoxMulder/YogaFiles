var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: "Fthefed22",
	database: 'myMusicDB'
});

//Create
// connection.query("INSERT INTO songs (title, artist, genre) VALUES ('Goin to Space', 'John Titor', 'Electronic')", function(err, results) {
// 	if(err) throw err;

// 	console.log(results);
// });

//Update
connection.query("UPDATE songs SET ? WHERE ?", [{title: "Goin 2 Space"}, {artist:"John Titor"}], function(err, results) {
	if(err) throw err;

	console.log(results);
});

//Delete
// connection.query("DELETE FROM songs WHERE ?", {title: "Goin 2 Space"}, function(err, results) {
// 	if(err) throw err;

// 	console.log(results);
// });