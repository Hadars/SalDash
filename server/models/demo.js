module.exports = function(sequelize, DataTypes) {

  var modelDefinition = {
    fullname: {
      type: DataTypes.STRING,
      allowNull: false
    },

    company: {
      type: DataTypes.STRING,
      allowNull: true
    },

    phone: {
      type: DataTypes.STRING,
      allowNull: false
    },

   email: {
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

  var Demo = sequelize.define("demo", modelDefinition, modelOptions);

  return Demo;
};
