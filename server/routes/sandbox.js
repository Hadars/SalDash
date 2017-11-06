var express = require('express');
var router = express.Router();
var models = require('../models')
/* GET home page. */
router.get('/', function(req, res, next) {
  models.account.findAll({
    include: [ models.user ]
  }).then(function(accounts) {
    // res.render('index', {
    //   title: 'Sequelize: Express Example',
    //   users: users
    // });
    console.log(accounts);
    res.status(200).json(accounts);
    // res.send(accounts.json();
  });
  // res.send('Succesfuly loged in');
});

module.exports = router;
