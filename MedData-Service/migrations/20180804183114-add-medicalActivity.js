'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('MedicalActivity', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      diagnosis: DataTypes.STRING,
      prescription_id: DataTypes.INTEGER,
      notes: DataTypes.STRING,
      user_id: DataTypes.INTEGER
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('MedicalActivity');
  }
};
