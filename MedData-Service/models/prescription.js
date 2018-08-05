'use strict';
module.exports = function (sequelize, DataTypes){
  var Prescription = sequelize.define('Prescription', {
    prescription_id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal('NOW()')
    },
    expired_date: DataTypes.DATE,
    hospital: DataTypes.STRING,
    doctor_name: DataTypes.STRING,
    medicine: DataTypes.JSON,
    hospital_stamp: DataTypes.BOOLEAN,
    signed_date: DataTypes.DATE,
    counter: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    repetition: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models){
        Prescription.hasOne(models.MedicalActivity, { foreignKey: 'user_id' });
      }
    }
  });
  return Prescription;
};
