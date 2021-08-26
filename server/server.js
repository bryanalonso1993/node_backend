/**
 * Dependecias configuracion
 */
require('../config/config');
const express = require('express');

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
    db(){
        const sequelize = require('../db/connection');
        sequelize.sync().then( () => console.log('OK')).catch(e => console.log(e));
    }
    routes(){
        this.app.use('/', require('../routes/main')());
    }
    listen(){
        this.app.listen(process.env.PORT, () => console.log(`App running on port ${process.env.PORT}`) );
    }
}

module.exports = Server;
