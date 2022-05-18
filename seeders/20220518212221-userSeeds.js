'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Users', [
     {
       username: 'Nate',
       password: 'nateisgreat',
       createdAt: new Date(),
       updatedAt: new Date(),
     },
     {
       username: 'Shane',
       password: 'shaneisbane',
       createdAt: new Date(),
       updatedAt: new Date(),
     },
   ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Users', null, {});
  }
};
