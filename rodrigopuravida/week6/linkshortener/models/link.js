'use strict';
module.exports = function(sequelize, DataTypes) {
  var link = sequelize.define('link', {
    id: DataTypes.STRING,
    url: DataTypes.STRING,
    hash: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return link;
};