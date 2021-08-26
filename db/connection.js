/**
 * parametros de conexion a la base de datos
 */
require('../config/config');
const { Sequelize } = require('sequelize');
const logger = require('../config/logger');

const sequelize = new Sequelize(process.env.DB, process.env.USERDB, process.env.PASSDB, {
    host: process.env.HOSTDB,
    dialect: process.env.ENGINEDB,
    port: process.env.PORTDB,
    timezone: 'America/Lima',
});

sequelize.authenticate()
        .then( () => {
            logger.log({ level: 'info', message: 'Success Authentication ORM sequelize'});
        })
        .catch( e => {
            logger.log({ level: 'error', message: `Error Connect Database ${e}`})
        });

module.exports = sequelize;
