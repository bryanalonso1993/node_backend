const { DataTypes } = require('sequelize');
const con = require('../connection');

const generalCases = con.define('casoscovid', {
    updated: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    cases: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    todayCases: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    deaths: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    todayDeaths:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    recovered: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    todayRecovered: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    active: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    critical: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    casesPerOneMillion: {
        type: DataTypes.DOUBLE(10,2),
        allowNull: false
    },
    deathsPerOneMillion:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    tests:{
        type: DataTypes.INTEGER,
        allowNull:false
    },
    testsPerOneMillion:{
        type: DataTypes.DOUBLE(10,2),
        allowNull: false
    },
    population:{
        type: DataTypes.BIGINT,
        allowNull: true
    },
    continent:{
        type: DataTypes.STRING,
        allowNull: false
    },
    activePerOneMillion:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    recoveredPerOneMillion:{
        type: DataTypes.DOUBLE(7,2),
        allowNull: false
    },
    criticalPerOneMillion:{
        type: DataTypes.DOUBLE(6,2),
        allowNull: false
    },
    countries:{
        type: DataTypes.STRING(2000),
        allowNull: false
    }
},{
    freezeTableName: true
})

module.exports = generalCases;
