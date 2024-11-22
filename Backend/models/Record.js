const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Record = sequelize.define('Record', {
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
  date: { type: DataTypes.DATEONLY, allowNull: false },
});

module.exports = Record;
