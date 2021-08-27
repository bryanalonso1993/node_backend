const { request, response } = require('express');
const jwt = require('jsonwebtoken');
/**
 * Authentication
 */
require('../config/config');

module.exports = (req=request, res=response) => {
    // const { username, password } = req.body;
    if (!(req.path === '/authentication')) throw res.status(401).json({ error: 'Bad Route'});
    /**
     * Basic Authentication 
     */
    if (!req.headers.authorization || req.headers.authorization.indexOf('Basic ') === -1) {
        throw res.status(401).json({ error:'Missing Authorization Header' })
    }
    /**
     * https://jasonwatmore.com/post/2018/09/24/nodejs-basic-authentication-tutorial-with-example-api
     */
    const base64Credentials =  req.headers.authorization.split(' ')[1];
    const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
    const [username, password] = credentials.split(':');    
    if ( username === process.env.USERAPI && password === process.env.PASSAPI)
    {
        const token = jwt.sign({
            data: username
        }, process.env.SEED, { expiresIn: '1h'});
        res.status(200).json({ token: token });
    }else{
        throw res.status(404).json({ error: 'Error de authenticacion'});
    }
}
