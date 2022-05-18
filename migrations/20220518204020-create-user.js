'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        allowNull: false,
        type: Sequelize.STRING(150),
        unique: true
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING(150)
      },
      bio: {
        type: Sequelize.TEXT
      },
      avatar: {
        type: Sequelize.STRING
      },
      faveBread: {
        type: Sequelize.STRING(75)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};