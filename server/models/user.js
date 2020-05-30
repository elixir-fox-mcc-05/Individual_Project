'use strict';
const {generatePassword} = require("../helpers/bcrypt");
const date = new Date();
const dateBefore = date.setFullYear(date.getFullYear() - 10);
const dateAfter = date.setFullYear(date.getFullYear() - 100);

module.exports = (sequelize, DataTypes) => {
  class User extends sequelize.Sequelize.Model{}
  User.init({
    name: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : true
      }
    },
    password: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : true,
        len : [8, 50]
      }
    },
    email: {
      type : DataTypes.STRING,
      unique : true,
      validate : {
        isEmail : true,
        notEmpty : true
      }
    }
  }, {
    sequelize,
    hooks : {
      beforeCreate : (user) => {
        user.password = generatePassword(user.password);
      }
    },
    modelName : "User"
  });
  User.associate = function(models) {
    User.hasMany(models.Anime);
  };
  return User;
};