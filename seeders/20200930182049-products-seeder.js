'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('products', [{
        name:'ORN020002SR',
        detail:'hojas ornamentos',
        cw1:'colorways-1596309223255.jpg',
        cw2:'colorways-1596309223259.jpg',
        cw3:'colorways-1594419708072.jpg',
        exclusive:false,
        size:'32x32',
        price:250,
        category_id:6
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('products', null, {});
  }
};
