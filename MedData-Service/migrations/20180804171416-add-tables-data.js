'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('UserRecords', {
      user_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      ktp: Sequelize.INTEGER,
      blood_type: Sequelize.ENUM('A+', 'A-', 'O+', 'O-', 'AB+', 'AB-', 'B+', 'B-'),
      source_hospital: Sequelize.STRING,
      createdAt: Sequelize.
      height: Sequelize.DECIMAL,
      weight: Sequelize.DECIMAL,
      allergies: Sequelize.STRING,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('UserRecords');
  }
};
