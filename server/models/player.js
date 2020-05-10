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
      onUpdate: 'cascade',
      hooks: true
    }
  }, {
    sequelize,
    modelName: 'Player',
    validate: {
      teamSizeCapsCheck() {
        const { models } = sequelize;
        if (this.status === 'Starter') {
          let limit;
          let starterLimit = 9;
          if(this.position === 'QB' || this.position === 'DEF' || this.position === 'K') limit = 1;
          else if(this.position === 'RB' || this.position === 'WR' || this.position === 'TE') limit = 2;
          let counter = 0;
          let starterCounter = 0;

          return models.Team
            .findByPk(this.TeamId, {
              include: [models.Player]
            })
            .then(team => {
              team.Players.forEach(player => {
                if(player.position === this.position) {
                  counter++
                }
                if(player.status === 'Starter') {
                  starterCounter++;
                }

              })
              if(counter >= limit) {
                throw(`You have reach maximum capacity for position ${this.position} in your team starter, put him on the bench or find another player with different position`);
              }

              if(starterCounter >= starterLimit) {
                throw(`You have reach maximum capacity for starter player`);
              }
            })
            .catch(err => {
              throw(err);
            })
        } else {
          let limit = 5;
          let counter = 0;
          return models.Team
            .findByPk(this.TeamId, {
              include: [models.Player]
            })
            .then(team => {
              team.Players.forEach(player => {
                if(player.status === 'Bench') {
                  counter++
                }
              })
              if (counter >= limit ) {
                throw(`You have reach maximum capacity for bench player`);
              }
            })
            .catch(err => {
              throw(err);
            })
        }
      }
    },
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
      },
      beforeBulkDestroy(options) {
        options.individualHooks = true;
        console.log(options);
        return options;
      },
      beforeDestroy(player) {
        const { models } = sequelize;

        return models.Team.findByPk(player.TeamId)
          .then(team => {
            team.number_of_player--;
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