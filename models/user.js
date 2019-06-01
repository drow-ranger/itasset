'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    nik: DataTypes.STRING,
    department_id: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasOne(models.Computer, {
      foreignKey: 'user_id',
      as: 'computer',
    });
  
    User.belongsTo(models.Department, {
      foreignKey: 'department_id',
      as: 'department'
    });
  };
  return User;
};