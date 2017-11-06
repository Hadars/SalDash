"use strict";

module.exports = function(sequelize, DataTypes) {

  var modelDefinition = {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },

    type: {
      type: DataTypes.STRING,
      allowNull: true
    },

    settings: {
      type: DataTypes.STRING,
      allowNull: false
    },

    level: {
      type: DataTypes.STRING,
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

  var Account = sequelize.define('account', modelDefinition, modelOptions);

  Account.associate = function(models) {
    Account.hasMany(models.user);
  }

  return Account;
};