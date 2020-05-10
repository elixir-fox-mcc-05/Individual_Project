'use strict';
module.exports = (sequelize, DataTypes) => {
  let Model = sequelize.Sequelize.Model

  class Playlist extends Model {}

  Playlist.init({
    name: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    hooks : {
      beforeCreate(user) {
        if(!user.name) {
          user.name = 'Untitled'
        }
      }
    }
  })
  Playlist.associate = function(models) {
    // associations can be defined here
  };
  return Playlist;
};