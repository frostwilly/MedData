'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Prescription', {
      prescription_id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
      },
      expired_date: DataTypes.DATE,
      hospital: DataTypes.STRING,
      doctor_name: DataTypes.STRING,
      medicine: DataTypes.JSON,
      hospital_stamp: DataTypes.BOOLEAN,
      signed_date: DataTypes.DATE,
      counter: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
      repetition: DataTypes.INTEGER
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Prescription');
  }
};
