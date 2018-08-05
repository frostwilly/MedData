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
    user_id: DataTypes.INTEGER,
    createdAt: {
      type: 'TIMESTAMP',
      defaultValue: sequelize.literal('NOW()')
    }
  }, {
    classMethods: {
      associate: function(models){
        MedicalActivity.hasOne(models.Prescription, { foreignKey: 'prescription_id' });
      },
      timestamp: true
    },

  });
  return MedicalActivity;
};
