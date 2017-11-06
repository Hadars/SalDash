var express = require('express');
var router = express.Router();
var models = require('../models')


router.get('/', function(req, res, next) {
  models.account.findAll({
    include: [ models.user ]
  }).then(function(accounts) {
    console.log(accounts);
    res.status(200).json(accounts);
  });
});

module.exports = router;
