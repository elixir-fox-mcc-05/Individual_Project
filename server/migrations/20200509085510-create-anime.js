'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Animes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      mal_id: {
        type : Sequelize.INTEGER
      },
      image_url:{
        type : Sequelize.STRING
      },
      genre: {
        type: Sequelize.STRING
      },
      rating: {
        type: Sequelize.FLOAT
      },
      url: {
        type: Sequelize.STRING
      },
      status : {
        type: Sequelize.BOOLEAN
      },
      UserId : {
        type : Sequelize.INTEGER,
        references : {
          model : "Users",
          key : "id"
        }
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
    return queryInterface.dropTable('Animes');
  }
};