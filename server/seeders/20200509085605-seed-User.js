'use strict';
const {generatePassword} = require("../helpers/bcrypt");
module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = [{
      name : "Yodi Febrian",
      password : generatePassword("qwe12345"),
      email : "yodji@gmail.com"
    }];
    data[0].createdAt = new Date();
    data[0].updatedAt = new Date();
    return queryInterface.bulkInsert("Users", data, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  }
};
