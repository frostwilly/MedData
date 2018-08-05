'use strict';
module.exports = function(sequelize, DataTypes) {
  const UserRecord = sequelize.define('UserRecord', {
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
    source_hospital: DataTypes.STRING,
    height: DataTypes.DECIMAL,
    weight: DataTypes.DECIMAL,
    allergies: DataTypes.STRING,
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    birthday: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        UserRecord.hasMany(models.MedicalActivity, { foreignKey: 'user_id' });
      }
    }
  });
  return UserRecord;
};
