const { request, response } = require('express');
const { devices } = require('../db/models');

/**
 * logger
 */
const logger = require('../config/logger');

exports.insertDevice = async (req=request, res=response) => {
    const { deviceName, ipAddress, organization } = req.body;
    if (!(req.path === '/insertdevice')) throw res.status(404).json({error: 'Bad path insert devices'});
    await devices.create({ deviceName, ipAddress, organization })
            .then( () => {
                logger.log({ level:'info', message: 'Success register device'});
                res.status(200).json({ msg: 'success register device '});
            })
            .catch( e => {
                logger.log({ level:'error', message: `Error register device ${e}`});
                res.status(404).json({ error: `Error register device ${e}`});
            });
}

exports.insertDevices = async (req=request, res=response) => {
    const datasets = req.body;
    if (!(req.path === '/insertdevices')) throw res.status(404).json({error: 'Bad path insert devices'});
    await devices.bulkCreate(datasets)
        .then( () => {
            logger.log({ level:'info', message: 'Success Bulk register devices'});
            res.status(200).json({ msg: 'success Bulk register devices'});
        })
        .catch( e => {
            logger.log({ level:'error', message: `Error Bulk register devices ${e}`});
            res.status(404).json({ error: `Error Bulk register devices ${e}`});
        })
}
