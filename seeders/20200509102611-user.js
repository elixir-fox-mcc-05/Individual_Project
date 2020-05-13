'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users',
      [
        {
          name: 'JohnDoe',
          email: 'oke1@mail.com',
          password: '123',
        },
        {
          name: 'Denny',
          email: 'oke2@mail.com',
          password: '1234',
        },
        {
          name: 'test',
          email: 'oke3@mail.com',
          password: '12345',
        }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
