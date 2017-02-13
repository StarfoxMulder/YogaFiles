'use strict';
module.exports = function(sequelize, DataTypes) {
  var Manager = sequelize.define('Manager', {
    fullName: DataTypes.STRING,
    storeZip: DataTypes.STRING,
    uniformColor: DataTypes.STRING,
    uniformNumber: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Manager;
};