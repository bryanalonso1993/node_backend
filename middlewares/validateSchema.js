const Joi = require('joi');
const logger = require('../config/logger');
const { request, response } = require('express');

exports.validateSchemaToken = (req=request, res=response, next) => {
    const { token } = req.params;
    const schema = Joi.object({
        token: Joi.string().required()
    })
    const { error } = schema.validate({ token });
    if (error) {
        logger.log({ level:'error', message: `Error validate SchemaToken ${ error.details[0].message }` })
        throw res.status(500).json({ error: error })
    }
    next();
}
