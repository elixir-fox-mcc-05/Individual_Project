'use strict';
const { encrypt } = require('../helpers/bcrypt.js');

module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;

  class User extends Model {}

  User.init(
    {
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: `First name is required`
          },
          notEmpty: {
            msg: `First Name cannot empty`
          },
          checkHtmlTags(value) {
            if (/<[a-z/][\s\S]*>/i.test(value)) {
              throw 'Cannot contain html tags';
            }
          }
        }
      },
      last_name: {
        type: DataTypes.STRING
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          msg: `Email already exist`
        },
        validate: {
          notNull: {
            msg: `Email is required`
          },
          notEmpty: {
            msg: `Email cannot empty`
          },
          isEmail: {
            msg: `Must be an email`
          }
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: `Password required`
          },
          notEmpty: {
            msg: `Password cannot empty`
          },
          len: {
            args: [6],
            msg: `Password at least 6 characters`
          }
        }
      }
    },
    {
      hooks: {
        beforeCreate(user) {
          if (!user.last_name) {
            user.last_name = user.first_name;
          }
          user.password = encrypt(user.password);
        }
      },
      sequelize
    }
  );

  User.associate = function (models) {
    // associations can be defined here
    User.hasMany(models.UserAnime);
  };
  return User;
};
