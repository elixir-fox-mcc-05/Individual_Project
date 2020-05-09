'use strict';
const { hashPassword } = require('../helpers/bcrypt.js');

module.exports = (sequelize, DataTypes) => {

  const { Model } = sequelize.Sequelize;

  class User extends Model {}

  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'your name can\'t be empty'
        }
      } 
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'username already exist'
      },
      validate: {
        notEmpty: {
          msg: 'username can\'t be empty'
        },
        is: {
          args: /^\w+$/gi,
          msg: 'Team name can only contain alphanumeric letter and underscore'
        },
        len: {
          args: [8],
          msg: 'Team name must be at least 8 character long'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'email already exist'
      },
      validate: {
        notEmpty: {
          msg: 'your email can\'t be empty'
        },
        isEmail: {
          msg: 'Invalid email format'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      vaidate: {
        len: {
          args: [8],
          msg: 'password must be 8 characters or longer'
        },
        notEmpty: {
          msg: 'your password can\'t be empty'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate(user) {
        user.password = hashPassword(user.password);
      }
    }
  });
  User.associate = function(models) {
    User.hasMany(models.Team);
  };
  return User;
};