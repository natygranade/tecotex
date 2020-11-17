'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('categories', [{
        name: 'ANIMAL PRINT',
      }], {});
   },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('categories', null, {});
    }
};
