'use strict';
module.exports = (sequelize, DataTypes) => {

  const Model = sequelize.Sequelize.Model

  class Movie extends Model {}

  Movie.init({
    Title: DataTypes.STRING,
    Year: DataTypes.STRING,
    imdbID: DataTypes.STRING,
    Type: DataTypes.STRING,
    Poster: DataTypes.STRING
  },{
    sequelize
  })

  Movie.associate = function(models) {
    // associations can be defined here
    Movie.belongsTo(models.User)
  };
  return Movie;
};