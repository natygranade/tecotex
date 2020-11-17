'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('products', [{
        name:'AP21012SR',
        detail:'',
        cw1:'colorways-1592443560838.jpg',
        cw2:'colorways-1592443560865.jpg',
        cw3:'colorways-1592443560875.jpg',
        exclusive:true,
        size:'64x128',
        price:200,
        category_id:1
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('products', null, {});
  }
};
