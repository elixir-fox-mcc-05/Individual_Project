'use strict';
const { encryptPassword } = require('../helpers/bcrypt')

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Users', [{
			email: 'main@mail.com',
			password: encryptPassword('qwerty123'),
			createdAt: new Date(),
			updatedAt: new Date()
		},{
			email: 'test@mail.com',
			password: encryptPassword('qweqwe'),
			createdAt: new Date(),
			updatedAt: new Date()
		}], {})
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Users', null, {});
	}
};
