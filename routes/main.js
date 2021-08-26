const express = require('express');
const router = express.Router();
const { request, response } = require('express');
/**
 * Controllers
 */
const { authentication } = require('../controllers');
/**
 * Middlewares
 */
const { validateToken } = require('../middlewares');


module.exports = function () {
    router.get('/authentication', authentication)
    router.get('/insertdevices', validateToken, (req=request, res=response) => {
        res.send('Insertando dispositivos');
    })
    router.get('/', (req=request, res=response) => {
        res.send('Vengo de la Ruta');
    })
    return router;
}
