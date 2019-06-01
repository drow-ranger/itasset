'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Computers', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      motherboard: {
        type: Sequelize.STRING
      },
      processor: {
        type: Sequelize.STRING
      },
      memory: {
        type: Sequelize.INTEGER
      },
      harddisk: {
        type: Sequelize.INTEGER
      },
      os: {
        type: Sequelize.STRING
      },
      user_id: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('Computers');
  }
};