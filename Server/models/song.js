'use strict';

module.exports = (sequelize, DataTypes) => {
  /*
  const todo = sequelize.define('todo', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    due_date: DataTypes.DATE
  }, {});
  */
  class Song extends sequelize.Sequelize.Model {}

  Song.init
  (
    {
      title: DataTypes.STRING,
      artist: DataTypes.STRING,
      status: DataTypes.BOOLEAN,
      released_year: DataTypes.INTEGER,
      UserId: DataTypes.INTEGER
    },
    {
      validate:
      {
        notNull() 
        {
          if(this.title == "" || this.artist == "" || this.released_year < 0 )
            throw new Error("All data must be filled")
        }
        
      },
      sequelize,
      modelName : "Song"
    }
  )

  Song.associate = function(models) {
    // associations can be defined here
    Song.belongsTo(models.User)
  };
  return Song;
};