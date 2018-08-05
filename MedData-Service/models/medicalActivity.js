'use strict';
module.exports = function (sequelize, DataTypes){
  var MedicalActivity = sequelize.define('MedicalActivity', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    diagnosis: DataTypes.STRING,
    prescription_id: DataTypes.INTEGER,
    notes: DataTypes.STRING,
    hospital: DataTypes.STRING,
    createdAt: 'TIMESTAMP',
    user_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models){
        ModelActivity.hasOne(models.Prescription, { foreignKey: 'prescription_id' });
      }
    }
  });
  return MedicalActivity;
};
