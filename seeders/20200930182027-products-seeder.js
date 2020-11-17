'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('products', [{
        name:'TR21215JL',
        detail:'leaves',
        cw1:'colorways-1594011852937.jpg',
        cw2:'colorways-1594011852971.jpg',
        cw3:'colorways-1594011852979.jpg',
        exclusive:false,
        size:'64x32',
        price:200,
        category_id:7
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('products', null, {});
  }
};
