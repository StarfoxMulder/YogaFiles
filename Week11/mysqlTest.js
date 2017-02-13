var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: "Fthefed22",
	database: 'myMusicDB'
});

// connection.connect(function(err) {
// 	if(err) {
// 		throw err;
// 		console.log(err);
// 	} else {
// 		console.log("connected as id "+connection.threadId);
// 	}
// });

// connection.query('SELECT * FROM songs', function(err, res) {
// 	if(err) {
// 		throw err;
// 	} else {
// 		console.log(res);
// 	}
// });

// var song = { title: '', artist: '', genre: ''};

// var beenASon = { title: 'Crosseyed and Painless', artist: 'Talking Heads', genre: '???'};

// connection.query('INSERT INTO songs SET ?', beenASon, function(err, res) {
// 	if(err) {
// 		throw err;
// 	} else {
// 		console.log('Last insert ID: '+res.insertId);
// 	}
// });

connection.query('SELECT * FROM songs', function(err, res) {
	for(var i = 0; i < res.length; i++) {
		console.log(res[i].id + " | "+res[i].title+" | "+res[i].artist+" | "+res[i].genre);
	}
	console.log("______________________________________________");
})

// connection.query('INSERT INTO songs (title, artist, genre) VALUES ("Goin to Space", "John Titor", "Electronic")' , function(err, res) {
// 	if (err) throw err;

// 	console.log(res);
// });

// connection.query('SELECT * FROM songs WHERE genre=?', ['Punk'], function(error,res){
// 	if (error) {
// 		throw error;
// 	} else {
// 		for(var i = 0; i < res.length; i++) {
// 			console.log(res[i].id + " | "+res[i].title+" | "+res[i].artist+" | "+res[i].genre);
// 		}
// 	}
// }); /*The ? above inserts 'punk' into the query - makes for variability in searches */
