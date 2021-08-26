const { request, response } = require('express');
const jwt = require('jsonwebtoken');
/**
 * Authentication
 */
require('../config/config');

module.exports = (req=request, res=response) => {
    const { username, password } = req.body;
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
