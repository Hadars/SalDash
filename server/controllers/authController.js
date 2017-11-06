'use strict';

var jwt = require('jsonwebtoken');

var config = require('../config/config');
var db = require('../services/database');
var models  = require('../models');
// var User = require('../models/user');
// var Demo = require('../models/demo');

// The authentication controller.
var AuthController = {};

// Register a user.
AuthController.signUp = function(req, res) {
  console.log('hello from AuthController.signUp@/controllers/authController.js');
  console.log("req.body: ", req.body);
  // console.log("res: ", res);
  if(!req.body.fullname || !req.body.email) {
    res.json({ message: 'Please provide a username and a password.' });
  } else {
    db.sync().then(function() {
      var newDemo ={
        fullname: req.body.fullname,
        company: req.body.company,
        phone: req.body.phone,
        email: req.body.email
      }

      return Demo.create(newDemo).then(function() {
        res.status(201).json({ message: 'Demo Requested!' });
      });
    }).catch(function(error) {
      res.status(403).json({ message: 'Errorrrrrr!' });
      console.log(error);
    });
  }
}

AuthController.authenticateUser = function(req, res) {
  console.log('request: ', req.body);
  if(!req.body.username || !req.body.password) {
    res.status(404).json({ message: 'Username and password are needed!' });
  } else {
    var username = req.body.username,
      password = req.body.password,
      potentialUser = { where: { username: username } };

    models.user.findOne(potentialUser).then(function(user) {
      if(!user) {
          res.status(404).json({ message: 'Authentication failed!' });
      } else {
        user.comparePasswords(password, function(error, isMatch) {
          if(isMatch && !error) {
            var token = jwt.sign(
              { username: user.username },
              config.keys.secret,
              { expiresIn: config.jwt.expiresIn }
            );

            res.json({ success: true, token: 'JWT ' + token, role: user.role });
          } else {
            res.status(404).json({ message: 'Login failed!' });
          }
        });
      }
    }).catch(function(error) {
      res.status(500).json({ message: 'There was an error!' });
    });
  }
}

module.exports = AuthController;