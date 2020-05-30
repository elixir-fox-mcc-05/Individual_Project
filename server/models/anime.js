'use strict';
module.exports = (sequelize, DataTypes) => {
  class Anime extends sequelize.Sequelize.Model{}

  Anime.init({
    title: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : true
      }
    },
    mal_id: DataTypes.INTEGER,
    genre: DataTypes.STRING,
    rating: DataTypes.FLOAT,
    image_url: DataTypes.STRING,
    url: DataTypes.STRING,
    status : {
      type : DataTypes.BOOLEAN,
      defaultValue : false
    },
    UserId : {
      type : DataTypes.INTEGER,
      references : {
        model : "Users",
        key : "id"
      },
      onDelete : "cascade",
      onUpdate : "cascade"
    }
  }, {
    sequelize,
    modelName : "Anime"
  });
  Anime.associate = function(models) {
    Anime.belongsTo(models.User);
  };
  return Anime;
};