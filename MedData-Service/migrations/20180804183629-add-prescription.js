'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Prescriptions', {
      prescription_id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('NOW()')
      },
      expired_date: Sequelize.DATE,
      hospital: Sequelize.STRING,
      doctor_name: Sequelize.STRING,
      medicine: Sequelize.JSON,
      hospital_stamp: Sequelize.BOOLEAN,
      signed_date: Sequelize.DATE
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Prescriptions');
  }
};
