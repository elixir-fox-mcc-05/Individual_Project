'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("Teams", "UserId", {
      type: Sequelize.INTEGER,
      references: {
        model: "Users",
        key: "id"
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
      hooks: true
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("Teams", "UserId")
  }
};
