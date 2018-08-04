'use strict';
module.exports = function (sequelize, DataTypes){
  var Medicine = sequelize.define('Medicines', {
    medicine_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    medicine_type: DataTypes.ENUM('GENERIC', 'SPECIALIZED'),
    medicine_name: DataTypes.STRING,
    rules: DataTypes.STRING
  });
  return Medicine;
};
