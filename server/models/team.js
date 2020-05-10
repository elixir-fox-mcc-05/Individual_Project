'use strict';
module.exports = (sequelize, DataTypes) => {

  const { Model } = sequelize.Sequelize;

  class Team extends Model {}

  Team.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'Team name already used by another user'
      },
      validate: {
        notEmpty: {
          msg: 'Team name can\'t be empty'
        },
        is: {
          args: /^\w+$/gi,
          msg: 'Team name can only contain alphanumeric letter and underscore'
        },
        len: {
          args: [5],
          msg: 'Team name must be at least 5 character long'
        }
      }
    },
    number_of_player: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      validate: {
        max: {
          args: 14,
          msg: 'Your team already reach number of player limit (14)'
        }
      }
    },
    UserId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Users",
        key: "id"
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
      hooks: true
    }
  }, {
    sequelize,
    modelName: 'Team'
  });
  Team.associate = function(models) {
    Team.hasMany(models.Player);
    Team.belongsTo(models.User);
  };
  return Team;
};