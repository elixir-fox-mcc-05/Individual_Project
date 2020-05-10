'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('UserURLs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      UserId: {
        type: Sequelize.INTEGER,
        references : {
          model: 'Users',
          key: 'id'
        },
        OnUpdate: 'cascade',
        OnDelete: 'cascade'
      },
      URLId: {
        type: Sequelize.INTEGER,
        references : {
          model: 'URLs',
          key: 'id'
        },
        OnUpdate: 'cascade',
        OnDelete: 'cascade'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('UserURLs');
  }
};