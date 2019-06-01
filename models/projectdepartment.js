'use strict';
module.exports = (sequelize, DataTypes) => {
  const Projectdepartment = sequelize.define('Projectdepartment', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true, 
      allowNull: false 
    },
    project_id: DataTypes.STRING,
    department_id: DataTypes.STRING
  }, {});
  Projectdepartment.associate = function(models) {
    // associations can be defined here
  };
  return Projectdepartment;
};