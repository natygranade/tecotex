'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('products', [{
        name:'GE20007MC',
        detail:'',
        cw1:'colorways-1594528592145.jpg',
        cw2:'colorways-1594419708064.jpg',
        cw3:'colorways-1594528592149.jpg',
        exclusive:false,
        size:'32x32',
        price:100,
        category_id:5
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('products', null, {});
  }
};
