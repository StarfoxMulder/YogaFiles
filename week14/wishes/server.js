var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }))

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Fthefed22',
  database : 'wishes_db'
});

app.get('/create', function(req,res) {
  connection.query('INSERT INTO wishes (wish) VALUES (?)', [req.body.wish], function(err, result) {
    if(err) throw err;
    res.redirect('/');
  });
});

app.get('/', function(req,res) {
  
  connection.query('SELECT * FROM wishes;', function(err, data) {
    if (err) throw err;

    res.render('index', {wishes : data});
  });
});

var port = 3000;
app.listen(port);