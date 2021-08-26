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
    }
    middlewares(){
        this.app.use(express.urlencoded({ extended:true }));
        this.app.use(express.json());
    }
    routes(){
        this.app.use('/', require('../routes/main')());        
    }
    listen(){
        this.app.listen(process.env.PORT, () => console.log(`App running on port ${process.env.PORT}`) );
    }
}

module.exports = Server;
