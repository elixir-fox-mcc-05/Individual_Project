'use strict';
module.exports = (sequelize, DataTypes) => {
  const Travel = sequelize.define('Travel', {
    location: DataTypes.STRING,
    destination: DataTypes.STRING
  }, {});
  Travel.associate = function(models) {
    // associations can be defined here
  };
  return Travel;
};