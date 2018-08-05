'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('MedicalActivitys', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      diagnosis: Sequelize.STRING,
      prescription_id: Sequelize.INTEGER,
      notes: Sequelize.STRING,
      user_id: Sequelize.INTEGER,
      createdAt: 'TIMESTAMP'
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('MedicalActivitys');
  }
};
