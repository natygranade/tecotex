'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('products', [{
        name:'GE20008NG',
        detail:'',
        cw1:'colorways-1594528326154.jpg',
        cw2:'colorways-1594528326168.jpg',
        cw3:'colorways-1594528326180.jpg',
        exclusive:false,
        size:'64x64',
        price:150,
        category_id:5
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('products', null, {});
  }
};
