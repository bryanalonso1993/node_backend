const Joi = require('joi');
const logger = require('../config/logger');
const { request, response } = require('express');

exports.validateSchemaToken = (req=request, res=response, next) => {
    const { token } = req.headers;
    const schema = Joi.object({
        token: Joi.string().required()
    })
    const { error } = schema.validate({ token });
    if (error) {
        logger.log({ level:'error', message: `Error validate SchemaToken ${ error.details[0].message }` });
        throw res.status(500).json({ error: error });
    }
    next();
}

exports.validateSchemaObjectDevices = (req=request, res=response, next) => {
    const arrayDevices = req.body;
    const schema = Joi.object().keys({
        deviceName: Joi.string().required(),
        ipAddress: Joi.string().required(),
        organization: Joi.string().required()
    });
    const schemaArray = Joi.array().items(schema);
    const { error } = schemaArray.validate(arrayDevices);
    if (error) {
        logger.log({ level:'error', message: `Error validate SchemaDevices ${ error.details[0].message }` });
        throw res.status(500).json({ error: error });
    }
    next();
}
