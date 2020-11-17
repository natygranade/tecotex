'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('users', [{
        full_name: 'Natalia Granade',
        email: 'natig2003@hotmail.com',
        password: '$2b$10$7zc4ejH5uWpJYsZOmBC5Qu8HhE1yFTH1HZNk4TNE64EkSII9KyAUC',
        adress:'gascon 1181',
        country:'argentina',
        phone: '1121692170',
        terms: true,
        admin: true,
        authorized:true, 
        avatar:''
      }], {});
  },

  down: (queryInterface, Sequelize) => {
       return queryInterface.bulkDelete('users', null, {});
  }
};
