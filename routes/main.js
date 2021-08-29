const express = require('express');
const router = express.Router();
const { request, response } = require('express');
/**
 * Controllers
 */
const { authentication, processDataCovid, processDataDevicesAnsible } = require('../controllers');
/**
 * Middlewares
 */
const { validateToken, validateSchema } = require('../middlewares');


module.exports = function () {
    /**
     * Metodos POST
     */
    router.post('/authentication', authentication);
    router.post('/insertcases', validateSchema.validateSchemaToken, validateToken, processDataCovid.insertGeneralCasesApi);
    router.post('/insertdevice', validateSchema.validateSchemaToken, validateToken, processDataDevicesAnsible.insertDevice);
    router.post('/insertdevices', validateSchema.validateSchemaToken, validateToken, validateSchema.validateSchemaObjectDevices, processDataDevicesAnsible.insertDevices);
    /**
     * Metodos DELETE
     */

    /**
     * Metodos GET
     */
    router.get('/', validateSchema.validateSchemaToken, validateToken, (req=request, res=response) => {
        res.send('Vengo de la Ruta');
    })
    router.get('/getdevices', validateSchema.validateSchemaToken, validateToken, (req=request, res=response) => {
        res.send('getdevices');
    })
    router.get('/getdevice', validateSchema.validateSchemaToken, validateToken, (req=request, res=response) => {
        res.send('getdevice')
    })
    return router;
}
