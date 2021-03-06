var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', function (req, res) {
  res.redirect('/burgers');
});

router.get('/burgers', function (req, res) {
  burger.selectall(function (data) {
    var hbsObject = { burgers: data };
    console.log(hbsObject);
    res.render('index', hbsObject);
  });
});

router.post('/burgers/insertOne', function (req, res) {
  burger.insertOne(['burger_name', 'devoured'], [req.body.burger_name, 0], function () {
    res.redirect('/burgers');
  });
});

router.put('/burgers/updateOne/:id', function (req, res) {
  var condition = 'id = ' + req.params.id;

  burger.updateOne({devoured: req.body.devoured}, condition, function () {
    res.redirect('/burgers');
  });
});

router.delete('/burgers/delete/:id', function (req, res) {
  var condition = 'id = '+req.params.id;

  burger.delete(condition, function() {
    res.redirect('/burgers');
  });
});

  
module.exports = router;
