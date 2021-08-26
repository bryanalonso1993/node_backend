/**
 * Dependecias configuracion
 */
require('../config/config');
const express = require('express');
const logger = require('../config/logger');

class Server{
    constructor(){
        this.app = express();
        this.middlewares();
        this.routes();
        this.db();
    }
    middlewares(){
        this.app.use(express.urlencoded({ extended:true }));
        this.app.use(express.json());
    }
    routes(){
        this.app.use('/', require('../routes/main')());
    }
    db(){
        require('../db/models');
        const sequelize = require('../db/connection');
        sequelize.sync()
                .then( () => logger.log({level:'info', message: 'Success Sync ORM Sequelize'}))
                .catch(e => logger.log({ level:'error', message: `Error Sync ORM Sequelize ${e}`}));
    }
    listen(){
        this.app.listen(process.env.PORT, () => console.log(`App running on port ${process.env.PORT}`) );
    }
}

module.exports = Server;
