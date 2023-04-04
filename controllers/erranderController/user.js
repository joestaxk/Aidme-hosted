 const httpStatus = require('http-status');
const Errander = require('../../models/errander/user');
const ApiError = require('../../utils/ApiError');
const { filterObjectData } = require('../../utils/helpers');

let userController = {};


userController.verifyUserAccount = async function(req,res,next) {
    try {
        // get userId
        const token = req.query.token;

        if(!token) throw new ApiError("Missing Token", httpStatus.BAD_REQUEST, "user Token not found in params");

        // If verified
        let amIverified = await Errander.findOne({keyToken: token});
        if(amIverified?.isVerified) return res.send({message: "Account has already been verified"})

        // update verification on user
        const isVerify = await Errander.findByIdAndUpdate(amIverified?.id, {$set: {isVerified: true, keyToken: ""} });
        if(!isVerify){
            throw new ApiError("NOT FOUND", httpStatus.NOT_FOUND, "Something went wrong with verification. try again!")
        }
        // return error/success report.
         res.status(httpStatus.OK).send({message: "Account has been verified successfully"})
    } catch (error) {
        console.log(error)
        res.status(httpStatus.BAD_REQUEST).send(error)
    }
}


userController.getMe = async function(req,res,next) {
    try {
        const me = await Errander.findById(req.id);
       
        if(me.isBlacklisted){
            //LOG USER OUT 
            userController.logout()
            throw new ApiError("Account Banned", httpStatus.UNAUTHORIZED,  "You've been blacklisted")
        }
        res.send(filterObjectData(me))
    } catch (error) {
        console.log(error)
       res.status(httpStatus.BAD_REQUEST).send(error)
    }
}

userController.logout = async function(req,res,next) {
    try {
        await Errander.findByIdAndUpdate(req.id, {$set: {tokens: []}});
        res.send({message: "You've been Logged out successfully!"})
    } catch (error) {
       res.status(httpStatus.BAD_REQUEST).send(error)
    }
}

module.exports = userController

