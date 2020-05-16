'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model

  class User extends Model{}
  
  User.init({
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
        notEmpty: true
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: [6,30],
        notEmpty: true
      }
    }
  }, {
    sequelize,
    modelName: "User"
  });
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};