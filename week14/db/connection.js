var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: "Fthefed22",
	database: 'topSongsDB'
});

module.exports = connection;