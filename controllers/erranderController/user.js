const httpStatus = require('http-status');
const Errander = require('../../models/errander/user');
const ApiError = require('../../utils/ApiError');

let userController = {};


userController.verifyUserAccount = async function(req,res,next) {
    try {
        // get userId
        const id = req.id;
        // update verification on user
        const isVerify = await Errander.findByIdAndUpdate({where: {id}}, {isVerified: true});
        if(isVerify){
            // return error/success report.
            res.status(httpStatus.OK).send({message: "Account has been verified successfully"})
        }
    } catch (error) {
        throw new ApiError("EmailVerificationError", httpStatus.BAD_REQUEST, error)
    }
}

module.exports = userController
