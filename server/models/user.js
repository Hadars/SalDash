"use strict";
var bcrypt = require('bcrypt');
var config = require('../config/config');

module.exports = function(sequelize, DataTypes) {

  var modelDefinition = {
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },

    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: true
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false
    },

    role: {
      type: DataTypes.INTEGER,
      defaultValue: config.userRoles.user
    },

    account_id: {
      type: DataTypes.INTEGER,
    }
  };


  var modelOptions = {
    instanceMethods: {
      comparePasswords: comparePasswords
    },
    hooks: {
      beforeValidate: hashPassword
    }
  };

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

  var User = sequelize.define("user", modelDefinition, modelOptions);

  User.associate = function(models) {
    User.belongsTo(models.account);
  }

  return User;
};
