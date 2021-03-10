'use strict';
let {bcryptPass} = require('../helpers/bycrypt')
module.exports = (sequelize, DataTypes) => {
  let {Model} = sequelize.Sequelize
  class User extends Model {}
  
  User.init({
    email: {
      type : DataTypes.STRING,
        validate: {
          notEmpty: true
        }
      },

    password: {
      type : DataTypes.STRING,
        validate: {
          notEmpty: true
        }
      },
  }, {
    sequelize,
      hooks: {
        beforeCreate(user) {
          user.password = bcryptPass(user.password)
        }
    }
  });
  
  User.associate = function(models) {

  };
  return User;
};