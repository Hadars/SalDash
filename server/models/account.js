// The User model.
'use strict';

var Sequelize = require('sequelize');

var config = require('../config/config');
var db = require('../services/database');

// 1: The model schema.
var modelDefinition = {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },

  type: {
    type: Sequelize.STRING,
    allowNull: true
  },

  settings: {
    type: Sequelize.STRING,
    allowNull: false
  },

  level: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  }

};

var modelOptions = {
  instanceMethods: {
  },
  hooks: {
  }
};

var DemoModel = db.define('account', modelDefinition, modelOptions);

module.exports = AccountModel;