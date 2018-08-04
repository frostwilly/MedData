'use strict';
module.exports = function (sequelize, DataTypes){
  var UserRecord: sequelize.define('UserRecord', {
    user_id: DataTypes.INTEGER,
    ktp: DataTypes.INTEGER,
    blood_type: DataTypes.ENUM('A+', 'A-', 'O+', 'O-', 'AB+', 'AB-', 'B+', 'B-'),
    source_hospital: DataTypes.STRING,

  }, {
    classMethods: {
      associate: function(models){
        UserRecord.hasMany(models.MedicalActivity, { foreignKey: 'user_id' });
      }
    }
  });
  return UserRecord;
};
