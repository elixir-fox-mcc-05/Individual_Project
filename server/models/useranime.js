'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;

  class UserAnime extends Model {}

  UserAnime.init(
    {
      UserId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        },
        onUpdate: 'Cascade',
        onDelete: 'Cascade'
      },
      AnimeId: DataTypes.INTEGER
    },
    {
      sequelize
    }
  );
  UserAnime.associate = function (models) {
    // associations can be defined here
    UserAnime.belongsTo(models.User);
  };
  return UserAnime;
};
