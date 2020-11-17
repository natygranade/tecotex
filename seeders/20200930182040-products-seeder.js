'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('products', [{
        name:'FL21006MC',
        detail:'',
        cw1:'colorways-1594594589930.jpg',
        cw2:'colorways-1594594589950.jpg',
        cw3:'colorways-1594594589962.jpg',
        exclusive:false,
        size:'32x32',
        price:250,
        category_id:4
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('products', null, {});
  }
};
