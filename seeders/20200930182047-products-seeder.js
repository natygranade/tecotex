'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('products', [{
        name:'FL21030JL',
        detail:'flores',
        cw1:'colorways-1596309011816.jpg',
        cw2:'colorways-1596309011827.jpg',
        cw3:'colorways-1596309011835.jpg',
        exclusive:true,
        size:'128x32',
        price:150,
        category_id:4
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('products', null, {});
  }
};
