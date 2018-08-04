'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Medicine', {
      medicine_id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      medicine_type: Sequelize.ENUM('GENERIC', 'SPECIALIZED'),
      medicine_name: Sequelize.STRING,
      dosage: Sequelize.DECIMAL,
      rules: Sequelize.STRING
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Medicine');
  }
};
