'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('MedicalActivitys', 'hospital', {
      type: Sequelize.STRING
    })
    .then(() => queryInterface.addColumn('MedicalActivitys', 'createdAt', {
      type: 'TIMESTAMP'
    }))
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('MedicalActivitys', 'hospital')
    .then(() => queryInterface.removeColumn('MedicalActivitys', 'createdAt'));
  }
};
