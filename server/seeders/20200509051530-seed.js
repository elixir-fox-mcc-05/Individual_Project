'use strict';
const {generatePassword} = require('../helper/bcrypt')
const userData = require('../data/userData.json')

module.exports = {
  up: (queryInterface, Sequelize) => {
    userData.map(user => {
      user.password = generatePassword(user.password)
      user.createdAt = new Date()
      user.updatedAt = new Date()

      return user
    })

    return queryInterface.bulkInsert('Users', userData, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {})
  }
};
