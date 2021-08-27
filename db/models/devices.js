const { DataTypes } = require('sequelize');
const con = require('../connection');

const devices = con.define('devices', {
    deviceName: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    ipAddress: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    organization: {
        type: DataTypes.STRING(30),
        allowNull: false
    }
},{
    freezeTableName: true
});

module.exports = devices;
