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
       faveBread: 'baguette',
       createdAt: new Date(),
       updatedAt: new Date(),
     },
     {
       username: 'Shane',
       password: 'shaneisbane',
       faveBread: 'sourdough',
       createdAt: new Date(),
       updatedAt: new Date(),
     },
     {
       username: 'Dan',
       password: 'pizzaisbread',
       faveBread: 'pizza',
       createdAt: new Date(),
       updatedAt: new Date(),
     },
     {
       username: 'Ray',
       password: 'xXgarlicmasterXx',
       faveBread: 'GARLIC BREAD',
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
