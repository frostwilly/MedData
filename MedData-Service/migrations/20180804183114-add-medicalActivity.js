'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('MedicalActivity', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      diagnosis: Sequelize.STRING,
      prescription_id: Sequelize.INTEGER,
      notes: Sequelize.STRING,
      user_id: Sequelize.INTEGER
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('MedicalActivity');
  }
};
