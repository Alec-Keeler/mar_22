'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Subbreaddits', [
     {
       name: 'Questions',
       description: 'Ask questions',
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       name: 'Bread Puns',
       description: 'PUNS',
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       name: 'GBBO',
       description: 'Best cooking show?',
       createdAt: new Date(),
       updatedAt: new Date()
     }
   ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Subbreaddits', null, {});
  }
};
