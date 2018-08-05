'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('MedicalActivities', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      diagnosis: Sequelize.STRING,
      prescription_id: Sequelize.INTEGER,
      notes: Sequelize.STRING,
      user_id: Sequelize.INTEGER,
      createdAt: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
       },
       updatedAt: {
         type: 'TIMESTAMP',
         defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
       },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('MedicalActivities');
  }
};
