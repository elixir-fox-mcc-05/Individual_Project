'use strict';
module.exports = (sequelize, DataTypes) => {

  const { Model } = sequelize.Sequelize;

  class Player extends Model {}

  Player.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    position: {
      type: DataTypes.STRING,
      allowNull: false
    },
    team: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false
    },
    TeamId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Teams",
        key: "id"
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    }
  }, {
    sequelize,
    modelName: 'Player',
    hooks: {
      beforeCreate(player) {
        const { models } = sequelize;

        return models.Team.findByPk(player.TeamId)
          .then(team => {
            team.number_of_player++;
            return models.Team.update({
              number_of_player: team.number_of_player
            },{
              where: {
                id: player.TeamId
              }
            })
          })
          .catch(err => {
            throw(err);
          })
      }
    }
  });
  Player.associate = function(models) {
    Player.belongsTo(models.Team)
  };
  return Player;
};