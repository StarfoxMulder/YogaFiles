var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: "Fthefed22",
	database: 'topSongsDB'
});

// connection.query('SELECT * FROM top5000', function(err, res) {
// 	for(var i = 0; i < 5; i++) {
// 		console.log(res[i].position + " | "+res[i].artist+" | "+res[i].song+" | "+
// 			res[i].year+" | "+res[i].raw_total);
// 	}
// 	console.log("______________________________________________");
// })

// connection.query('SELECT * FROM TopAlbums', function(err, res) {
// 	for(var i = 0; i < 5; i++) {
// 		console.log(res[i].position + " | "+res[i].artist+" | "+res[i].title+" | "+
// 			res[i].year+" | "+res[i].raw_total);
// 	}
// 	console.log("______________________________________________");
// })

