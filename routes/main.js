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
const { validateToken, validateSchemaToken } = require('../middlewares');


module.exports = function () {
    /**
     * Metodos POST
     */
    router.post('/authentication', authentication)
    router.post('/insertdevices', validateSchemaToken ,validateToken, (req=request, res=response) => {
        res.send('Insertando dispositivos');
    })
    /**
     * Metodos GET
     */
    router.get('/', validateSchemaToken, validateToken, (req=request, res=response) => {
        res.send('Vengo de la Ruta');
    })
    router.get('/getdevicesansible', validateSchemaToken, validateToken, (req=request, res=response) => {
        res.send('ROOT');
    })
    return router;
}
