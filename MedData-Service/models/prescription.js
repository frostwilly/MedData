'use strict';
module.exports = function (sequelize, DataTypes){
  var Prescription: sequelize.define('Prescriptions', {
    prescription_id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true
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
