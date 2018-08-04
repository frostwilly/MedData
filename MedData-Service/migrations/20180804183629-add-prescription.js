'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Prescription', {
      prescription_id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true
      },
      expired_date: Sequelize.DATE,
      hospital: Sequelize.STRING,
      doctor_name: Sequelize.STRING,
      medicine: Sequelize.JSON,
      hospital_stamp: Sequelize.BOOLEAN,
      signed_date: Sequelize.DATE,
      counter: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      repetition: Sequelize.INTEGER
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Prescription');
  }
};
