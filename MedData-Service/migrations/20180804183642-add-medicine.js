'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Medicine', {
      medicine_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
      }
      medicine_type: DataTypes.ENUM('GENERIC', 'SPECIALIZED'),
      medicine_name: DataTypes.STRING,
      dosage: DataTypes.DECIMAL,
      rules: DataTypes.STRING
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Medicine');
  }
};
