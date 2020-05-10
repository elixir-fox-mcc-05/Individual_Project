'use strict';
module.exports = (sequelize, DataTypes) => {
  class URL extends sequelize.Sequelize.Model { }

  URL.init({
    link: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true
      }
    },
    artist: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true
      }
    },
    song: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true
      }
    },
  },
  {
    sequelize,
    modelName: 'URL'
  })
  URL.associate = function(models) {
    URL.belongsToMany(models.User, { through: 'UserURLs' })
  };
  return URL;
};