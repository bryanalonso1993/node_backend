const express = require('express');
const { request, response } = require('express');
const router = express.Router();

module.exports = function () {
    router.get('/', (req=request, res=response) => {
        res.send('Vengo de la Ruta');
    })
    return router;
}
