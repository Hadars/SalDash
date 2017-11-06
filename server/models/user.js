// The User model.
'use strict';

var Sequelize = require('sequelize');
var bcrypt = require('bcrypt');

var config = require('../config/config');
var db = require('../services/database');
var Account = require('./account');

// 1: The model schema.
var modelDefinition = {
  username: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },

  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: true
  },

  password: {
    type: Sequelize.STRING,
    allowNull: false
  },

  role: {
    type: Sequelize.INTEGER,
    defaultValue: config.userRoles.user
  },

  account_id: {
    type: Sequelize.INTEGER,

    references: {
    // This is a reference to another model
      model: Account,

      // This is the column name of the referenced model
      key: 'id'
    }
  }
};

// 2: The model options.
// Instance Methods: are helper methods declared during model definition which can be called later on model instances.
// Hooks are callbacks called by Sequelize during specific lifetime events.
var modelOptions = {
  instanceMethods: {
    comparePasswords: comparePasswords
  },
  hooks: {
    beforeValidate: hashPassword
  }
};

// 3: Define the User model.
var UserModel = db.define('user', modelDefinition, modelOptions);

// Compares two passwords.
function comparePasswords(password, callback) {
  bcrypt.compare(password, this.password, function(error, isMatch) {
    if(error) {
      return callback(error);
    }

    return callback(null, isMatch);
  });
}

// Hashes the password for a user object.
function hashPassword(user) {
  if(user.changed('password')) {
    return bcrypt.hash(user.password, 10).then(function(password) {
      user.password = password;
    });
  }
}

module.exports = UserModel;