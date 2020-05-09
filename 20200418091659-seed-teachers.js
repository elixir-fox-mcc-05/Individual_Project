'use strict';
let teacherData = require('../data/teachers.json')

module.exports = {
  up: (queryInterface, Sequelize) => {
    teacherData.map(teacher => {
      teacher.createdAt = new Date()
      teacher.updatedAt = new Date()

      return teacher
    })

    return queryInterface.bulkInsert('Teachers', teacherData, {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Teachers', null, {});
  }
};
