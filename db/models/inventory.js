const { Sequelize, DataTypes } = require('sequelize');
const con = require('../connection');

const inventory = con.define('inventory', {
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

module.exports = inventory;
