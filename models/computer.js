'use strict';
module.exports = (sequelize, DataTypes) => {
  const Computer = sequelize.define('Computer', {
    motherboard: DataTypes.STRING,
    processor: DataTypes.STRING,
    memory: DataTypes.INTEGER,
    harddisk: DataTypes.INTEGER,
    os: DataTypes.STRING,
    user_id: DataTypes.STRING
  }, {});
  Computer.associate = function(models) {
    // associations can be defined here
    Computer.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user'
    });
  };
  return Computer;
};