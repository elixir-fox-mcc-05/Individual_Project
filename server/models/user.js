'use strict';

const { generatePassword } = require('../helpers/bcrypt');

module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;

  class User extends Model {}

  User.init(
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            args: true,
            msg: 'name is required',
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        unique: {
          args: true,
          msg: 'email already in use',
        },
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: 'email is required',
          },
          isEmail: {
            args: true,
            msg: 'invalid email format',
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: 'email is required',
          },
          len: {
            args: 4,
            msg: 'password must be of more than 4 characters',
          },
        },
      },
    },
    {
      sequelize,
      hooks: {
        beforeCreate: (user) => {
          user.password = generatePassword(user.password);
        },
      },
    }
  );

  User.associate = function (models) {
    // associations can be defined here
  };
  return User;
};
