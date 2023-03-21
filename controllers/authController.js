const User = require('../models/userModel');
const config = require('../config/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


exports.login = (req, res, next) =>{
    const email = req.body.email;
    const password = req.body.password;
    let loadedUser;
    User.findOne({ email: email})
    .then(user => {
        if (!user){
            const error = new Error ('User Not found');
            error.statusCode = 401;
            throw error;
            
        }
        loadedUser = user;
        return bcrypt.compare(password, user.password)
    })
    .then(isEqual => {
        if (!isEqual){
            const error = new Error ('Wrong password');
            error.statusCode = 401;
            throw error;
        }
        const token = jwt.sign({
            email: loadedUser.email,
            userId: loadedUser._id.toString(),
        }, config.SECRET_KEY,
        {expiresIn: '1h'}
        );
        res.status(200).json({
            token:token, 
            userId: loadedUser._id.toString()
        });
    })
    .catch(err => {
        if (!err.statusCode){
            err.statusCode = 500;
        }
        next(err);
    });
};
