'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('UserRecord', {
      user_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      ktp: Sequelize.INTEGER,
      blood_type: Sequelize.ENUM('A+', 'A-', 'O+', 'O-', 'AB+', 'AB-', 'B+', 'B-'),
      source_hospital: Sequelize.STRING
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('UserRecord');
  }
};
