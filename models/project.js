'use strict';
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    project_head: DataTypes.STRING,
    project_description: DataTypes.STRING
  }, {});
  Project.associate = function(models) {
    // associations can be defined here
    Project.belongsToMany(models.Department, {
      through: 'Projectdepartment',
      as: 'departments',
      foreignKey: 'project_id'
    });
  };  
  return Project;
};