'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('products', [{
        name:'TR21201JL',
        detail:'',
        cw1:'colorways-1596589215525.jpg',
        cw2:'colorways-1596589215541.jpg',
        cw3:'colorways-1596589215554.jpg',
        exclusive:true,
        size:'32x32',
        price:150,
        category_id:7
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('products', null, {});
  }
};
