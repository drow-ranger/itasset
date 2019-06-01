'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Departments', {
      id: { 
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },      
      department_head: {
        type: Sequelize.STRING
      },
      department_description: {
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
    return queryInterface.dropTable('Departments');
  }
};