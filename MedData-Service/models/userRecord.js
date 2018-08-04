'use strict';
module.exports = function(sequelize, DataTypes) {
  const UserRecord = sequelize.define('UserRecords', {
    user_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    ktp: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    blood_type: DataTypes.ENUM('A+', 'A-', 'O+', 'O-', 'AB+', 'AB-', 'B+', 'B-'),
    source_hospital: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models){
        UserRecord.hasMany(models.MedicalActivity, { foreignKey: 'user_id' });
      }
    }
  });
  return UserRecord;
};
