'use strict';

let { hashPassword } = require('../helpers/bcrypt.js')


module.exports = (sequelize, DataTypes) => {
  let Model = sequelize.Sequelize.Model
  
  class User extends Model {}

  User.init({
    email: {
      type : DataTypes.STRING,
      unique : {
        args : true,
        msg : 'email already exist'
      }
    },
    password: {
      type : DataTypes.STRING,
      validate : {
        len : {
          args : [8,30],
          msg : 'password to sort , must be more than 8 char or lesthan 30 char'
        }
      },
    },
  }, {
    sequelize,
    hooks : {
      beforeCreate(user) {
        user.password = hashPassword(user.password)
      }
    }
  })

  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};