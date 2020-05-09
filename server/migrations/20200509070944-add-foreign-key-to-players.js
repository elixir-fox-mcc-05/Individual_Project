'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("Players", "TeamId", {
      type: Sequelize.INTEGER,
      references: {
        model: "Teams",
        key: "id"
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("Players", "TeamId")
  }
};
