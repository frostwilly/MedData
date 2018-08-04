'use strict';
module.exports = function (sequelize, DataTypes){
  var Medicine = sequelize.define('Medicine', {
    medicine_type: DataTypes.ENUM('GENERIC', 'SPECIALIZED'),
    medicine_name: DataTypes.STRING,
    dosage: DataTypes.DECIMAL,
    rules: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models){
        UserRecord.hasMany(models.MedicalActivity, { foreignKey: 'user_id' });
      }
    }
  });
  return Medicine;
};
