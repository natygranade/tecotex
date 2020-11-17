'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('products', [{
        name:'AA21015DR',
        detail:'brush',
        cw1:'colorways-1592443423956.jpg',
        cw2:'colorways-1592443423982.jpg',
        cw3:'colorways-1592443424043.jpg',
        exclusive:true,
        size:'32x32',
        price:200,
        category_id:2
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('products', null, {});
  }
};
