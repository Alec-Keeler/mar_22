'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
     return queryInterface.bulkInsert('Subscriptions', [
       {
         subId: 1,
         userId: 1,
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         subId: 2,
         userId: 1,
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         subId: 3,
         userId: 1,
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         subId: 1,
         userId: 2,
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         subId: 2,
         userId: 2,
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         subId: 1,
         userId: 3,
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         subId: 2,
         userId: 3,
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         subId: 3,
         userId: 3,
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
         subId: 3,
         userId: 4,
         createdAt: new Date(),
         updatedAt: new Date()
       },
     ], {});
    },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Subscriptions', null, {});
  }
};
