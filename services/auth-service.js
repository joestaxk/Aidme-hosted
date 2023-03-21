const jwt = require('jsonwebtoken');
const config = require('../config/db');

module.exports = (req, res, next) => {
    const token = req.get('Authorization').split(' ')[1];
    let decodedToken;
    try{
        decodedToken = jwt.verify(token, config.SECRET_KEY);
    }
    catch (err){
        err.statusCode = 500;
        throw err;
    }
    if (!decodedToken){
        const error = new Error('User not Authenticated');
        error.statusCode = 401;
        throw error;
    }
    req.userId = decodedToken.userId;
    next();
};
