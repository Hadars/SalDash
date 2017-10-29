// The User model.
'use strict';

var Sequelize = require('sequelize');
var bcrypt = require('bcrypt');

var config = require('../config/config');
var db = require('../services/database');

// 1: The model schema.
var modelDefinition = {
  fullname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  company: {
    type: Sequelize.STRING,
    allowNull: true
  },

  phone: {
    type: Sequelize.STRING,
    allowNull: false
  },

 email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  }
};

// 2: The model options.
// Instance Methods: are helper methods declared during model definition which can be called later on model instances.
// Hooks are callbacks called by Sequelize during specific lifetime events.
var modelOptions = {
  instanceMethods: {
  },
  hooks: {
  }
};

// 3: Define the User model.
var DemoModel = db.define('demo', modelDefinition, modelOptions);

// // Compares two passwords.
// function comparePasswords(password, callback) {
//   bcrypt.compare(password, this.password, function(error, isMatch) {
//     if(error) {
//       return callback(error);
//     }

//     return callback(null, isMatch);
//   });
// }

// // Hashes the password for a user object.
// function hashPassword(user) {
//   if(user.changed('password')) {
//     return bcrypt.hash(user.password, 10).then(function(password) {
//       user.password = password;
//     });
//   }
// }

module.exports = DemoModel;