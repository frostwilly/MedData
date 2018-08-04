'use strict';
module.exports = function (sequelize, DataTypes){
  var MedicalActivity: sequelize.define('MedicalActivity', {
    id: DataTypes.INTEGER,
    diagnosis: DataTypes.STRING,
    prescription_id: DataTypes.INTEGER,
    notes: DataTypes.STRING
  });
  return MedicalActivity;
};
