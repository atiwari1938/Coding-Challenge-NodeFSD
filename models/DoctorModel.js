const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');

const Doctor = sequelize.define('Doctor', {
  doctorId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  doctorName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  contactNumber: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  speciality: {
    type: DataTypes.STRING,
    allowNull: false
  },
  degree: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'doctors',
  timestamps: false
});

module.exports = Doctor;
