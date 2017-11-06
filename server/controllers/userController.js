'use strict';
// var db = require('../config/mysqlDB')
// var User = require('../models/user');
var models  = require('../models');

// The user controller.
var UserController = {
  index: function(req, res) {
    console.log('UserController');
    res.status(200).json({ message: 'Welcome to the users area ' + req.user.username + '!' });
  },
  getUsers: function(req, res) {
    models.user.all({where: {accountId: req.user.accountId}}).then(allUsers => {
      res.status(200).json(allUsers);
    })
  }
};

module.exports = UserController;