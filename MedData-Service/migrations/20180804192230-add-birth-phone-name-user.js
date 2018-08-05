'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('UserRecords', 'birthday', {
      type: Sequelize.DATE,
    })
    .then(() => queryInterface.addColumn(`UserRecords`, 'phone', {
      type: Sequelize.STRING
    }))
    .then(() => queryInterface.addColumn('UserRecords', 'name', {
      type: Sequelize.STRING
    }));
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('UserRecords', 'birthday')
    .then(() => queryInterface.removeColumn('UserRecords', 'phone'))
    .then(() => queryInterface.removeColumn('UserRecords', 'name'));
  }
};
