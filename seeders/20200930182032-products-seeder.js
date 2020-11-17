'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('products', [{
        name:'CON21144MM',
        detail:'bananas',
        cw1:'colorways-1594523926163.jpg',
        cw2:'colorways-1594523926165.jpg',
        cw3:'colorways-1594523926167.jpg',
        exclusive:false,
        size:'32x32',
        price:150,
        category_id:3
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('products', null, {});
  }
};

