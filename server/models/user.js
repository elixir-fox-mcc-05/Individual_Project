'use strict';
const { generatePassword } = require('../helpers/bcryptjs');

module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;

  class User extends Model {};

  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: `E-mail already registered`
      },
      validate: {
        notEmpty: {
          args: true,
          msg: `E-mail must be filled`
        },
        isEmail: {
          args: true,
          msg: 'E-mail must be in format <youremail@mail.com>'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Password must be filled'
        }
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Name must be filled'
        },
        len: {
          args: [1, 20],
          msg: `Your Name must be 1-20 characters long`
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate(user) {
        user.password = generatePassword(user.password);
      }
    }
  })

  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};