'use strict';
const Helper = require('../helper/helper')
module.exports = (sequelize, DataTypes) => {

  const { Model } = sequelize.Sequelize

  class User extends Model { }

  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { args: true, msg: 'Name Cannot be Blank' },
        notEmpty: { args: true, msg: 'Name Cannot be Empty' }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: { args: true, msg: 'Must in Email Format' },
        notNull: { args: true, msg: 'Email Cannot be Blank' },
        notEmpty: { args: true, msg: 'Email Cannot Empty' }
      }
    },
    pssword: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { args: true, msg: 'Password Cannot be Blank' },
        notEmpty: { args: true, msg: 'Password Cannot Empty' }
      }
    }
  }, {
    sequelize,
    hooks: {
      beforeCreate(user) {
        user.password = Helper.hashPasword(user.password)
      }
    }
  })

  User.associate = function (models) {
    // associations can be defined here
  };
  return User;
};