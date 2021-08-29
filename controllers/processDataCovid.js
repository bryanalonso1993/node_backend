const { request, response } = require('express');
const logger = require('../config/logger');

/**
 * import Models Sequelize
 */
const { generalCases } = require('../db/models');
/**
 * Helper para el endpoint
 */
const processEndpoint = require('../helpers/processEndpoint');

function convertArrayToString(array){
    return array.toString();
}

exports.insertGeneralCasesApi = async (req=request, res=response) => {
    let request = processEndpoint("https://corona.lmao.ninja/v2/continents?yesterday=true&sort", "get");
    await Promise.resolve(request)
        .then(x =>  x.data)
        .then(datasets => {
            for (let index=0;index<datasets.length;index++){ 
                datasets[index]['countries'] = convertArrayToString(datasets[index]['countries']);
            }
            generalCases.bulkCreate(datasets)
                .then(() => {
                    logger.log({ level:'info', message: 'Success Bulk General Cases Api Covid'});
                    res.status(200).json({ message: 'Success Bulk General Cases Api Covid'});
                })
                .catch(e => {
                    logger.log({ level:'error', message: `Error Bulk General Cases Api Covid ${e}`});
                    res.status(400).json({ error:e });
                });
        })
        .catch(e => {
            logger.log({ level:'error', message: `Error Endpoint ${e}`});
            res.status(400).json({ error: e.message });
        });
}

