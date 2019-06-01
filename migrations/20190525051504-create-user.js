'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: { 
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },      
      name: {
        type: Sequelize.STRING
      },
      nik: {
        type: Sequelize.STRING
      },
      department_id: {
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
    return queryInterface.dropTable('Users');
  }
};