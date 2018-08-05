'use strict';

module.exports = function (sequelize, DataTypes) {
  var Medicine = sequelize.define('Medicine', {
    medicine_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    medicine_type: DataTypes.ENUM('GENERIC', 'SPECIALIZED'),
    medicine_name: DataTypes.STRING,
    dosage: DataTypes.DECIMAL,
    rules: DataTypes.STRING,
    repetition: DataTypes.INTEGER,
    counter: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  }, {
    timestamp: true
  });

  return Medicine;
};
