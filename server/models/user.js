'use strict';
module.exports = (sequelize, DataTypes) => {

  class User extends sequelize.Sequelize.Model { }

  User.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true
      }
    }
  },
  {
    sequelize,
    modelName: 'User'
  })
  User.associate = function(models) {
    // associations can be defined here
    User.belongsToMany(models.URL, { through: 'UserURLs' })
  };
  return User;
};