'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('products', [{
        name:'AP21022JL',
        detail:'',
        cw1:'colorways-1592443594380.jpg',
        cw2:'colorways-1592443594387.jpg',
        cw3:'colorways-1592443594392.jpg',
        exclusive:true,
        size:'32x32',
        price:200,
        category_id:1
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('products', null, {});
  }
};
