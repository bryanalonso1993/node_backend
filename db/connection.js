/**
 * parametros de conexion a la base de datos
 */
require('../config/config');
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB, process.env.USERDB, process.env.PASSDB, {
    host: process.env.HOSTDB,
    dialect: process.env.ENGINEDB,
    port: process.env.PORTDB,
    timezone: 'America/Lima',
});

sequelize.authenticate()
        .then( () => {
            console.log('Success Authentication ORM Sequelize');
        })
        .catch( e => {
            throw new Error(`Error Connect Database ${e}`);
        });

module.exports = sequelize;
