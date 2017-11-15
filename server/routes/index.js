var express = require('express');
var router = express.Router();
// var db = require('../database/mysqlDB')

// function getUser(done){
//   db.get().query('SELECT * FROM users', function(err, rows) {
//       if (err) throw err;
//       done(rows);
//   });
// }

/* GET home page. */
router.get('/', function(req, res, next) {
  // getUser(function(rows){console.log(rows);})
  // res.render('index', { title: 'Express' });
  res.send('Succesfuly loged in');
});

module.exports = router;
