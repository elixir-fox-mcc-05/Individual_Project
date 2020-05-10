'use strict';
module.exports = (sequelize, DataTypes) => {

  class UserURL extends sequelize.Sequelize.Model { }

  UserURL.init({
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: true
      }
    },
    URLId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: true
      }
    },
  },
  {
    sequelize,
    modelName: 'UserURL'
  })
  UserURL.associate = function(models) {
    // associations can be defined here
    UserURL.belongsTo(models.User)
    UserURL.belongsTo(models.URL)
  };
  return UserURL;
};