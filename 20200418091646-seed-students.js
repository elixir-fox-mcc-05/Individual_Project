'use strict';
let studentData =require('../data/students.json') 

module.exports = {
  up: (queryInterface, Sequelize) => {
    studentData.map(student => {
      student.createdAt = new Date()
      student.updatedAt = new Date()
      return student
    })

    return queryInterface.bulkInsert('Students', studentData, {});
    
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Students', null, {});
  }
};
