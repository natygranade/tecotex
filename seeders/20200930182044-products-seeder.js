'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('products', [{
        name:'FL21001JL',
        detail:'botanico flores hojas ramas',
        cw1:'colorways-1596308893876.jpg',
        cw2:'colorways-1596308893887.jpg',
        cw3:'colorways-1596308893898.jpg',
        exclusive:true,
        size:'32x32',
        price:200,
        category_id:4
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('products', null, {});
  }
};
