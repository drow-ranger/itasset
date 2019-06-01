'use strict';
module.exports = (sequelize, DataTypes) => {
  const Department = sequelize.define('Department', {
    department_head: DataTypes.STRING,
    department_description: DataTypes.STRING
  }, {});
  Department.associate = function(models) {
    // associations can be defined here
    Department.hasMany(models.User, {
      foreignKey: 'department_id',
      as: 'users',
    });
  
    Department.belongsToMany(models.Project, {
      through: 'Projectdepartment',
      as: 'projects',
      foreignKey: 'department_id'
    });
  };  
  return Department;
};