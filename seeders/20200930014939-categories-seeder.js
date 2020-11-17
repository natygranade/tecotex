'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('categories', [{
        name: 'FLORALES',
      }], {});
   },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('categories', null, {});
    }
};
