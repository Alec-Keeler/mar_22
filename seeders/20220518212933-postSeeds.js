'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Posts', [
    {
      title: 'What is the Best Bread?',
      content: 'Please explain what your fave bread is and why?',
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'I liked sourdough before it was cool',
      content: 'Pandemic sourdough hipsters aint got nothin on me',
      userId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'What is the best baking tv show?',
      content: 'And why is it Great British Bake Off?',
      userId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Pizza is not bread',
      content: 'Just because something includes bread does not mean the whole thing is bread!',
      userId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Test Post 1',
      content: 'This is just a test post',
      userId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Test Post 2',
      content: 'This is just a test post',
      userId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Test Post 3',
      content: 'This is just a test post',
      userId: 2,
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
   return queryInterface.bulkDelete('Posts', null, {});
  }
};
