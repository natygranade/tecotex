'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('products', [{
        name:'CON21462NG',
        detail:'space',
        cw1:'colorways-1594419708036.jpg',
        cw2:'colorways-1594419708064.jpg',
        cw3:'colorways-1594419708072.jpg',
        exclusive:false,
        size:'32x32',
        price:150,
        category_id:3
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('products', null, {});
  }
};
