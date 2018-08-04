'use strict';
module.exports = function (sequelize, DataTypes){
  var Prescription: sequelize.define('Prescription', {

  }, {
    classMethods: {
      associate: function(models){
        UserRecord.hasMany(models.MedicalActivity, { foreignKey: 'user_id' });
      }
    }
  });
  return Prescription;
};
