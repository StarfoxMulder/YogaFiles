'use strict';

//export this modle to index.js
module.exports = function(sequelize, DataTypes) {
  //the model itself is character, defined in sequelize
  var Characters = sequelize.define('Characters', {
    //attributes that entries in the table/model can have
    routeName: DataTypes.STRING,
    name: DataTypes.STRING,
    role: DataTypes.STRING,
    age: DataTypes.INTEGER,
    forcePoints: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Characters;
};