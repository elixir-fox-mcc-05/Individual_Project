'use strict';
module.exports = (sequelize, DataTypes) => {

  const { encrypt } = require('../helpers/bcrypt.js');

  const Model = sequelize.Sequelize.Model;
  
  class User extends Model {}

  User.init({
    email: {
      type: DataTypes.STRING,
      unique: {
        args: true,
        msg: `Email sudah terdapat di server silahkan menggunakan email lainnya`
      },
      validate: {
        notEmpty: {
          args: true,
          msg: 'Email tidak boleh kosong'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: `Password tidak boleh kosong`
        },
        len: {
          args: [6],
          msg: `Password minimal 6 karakter`
        }
      }
    },
  }, {
    sequelize,
    hooks: {
      beforeCreate: (user) => {
        user.password = encrypt(user.password);
      }
    },
    modelName: 'User'
  });
  
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};