const httpStatus = require("http-status");
const jwt = require("jsonwebtoken");
const config = require("../config/config")
const User = require("../models/client/user");
const ApiError = require("../utils/ApiError");

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MWJiZmEwNGU0OGRkYTRlODY0N2Y0NSIsImVtYWlsIjoiam9lc3RheGtAZ21haWwuY29tIiwiaWF0IjoxNjc5NTQwMTI4LCJleHAiOjE2Nzk1NDM3Mjh9.nw1fT872F6ggZl48moNEBXndIA4Y6_6vtuJfRmHIcDo
const Auth = async function(req,res,next) {

  const bearerToken = req.headers['authorization']?.replace("Bearer ");
  // DO SOME JWT VERIFICATION
  
 try {
     if(bearerToken) {
         const decoded = await jwt.verify(bearerToken, config.JWT_SECRETKEY);

         console.log(decoded)
         //check user
         const ifUserExist = await User.findById({where: {id: decoded.id}});
         if(ifUserExist) {
             // if user isBlacklisted
             if(ifUserExist.isBlacklisted){
                 throw new ApiError("User Account Suspended", httpStatus.UNAUTHORIZED, "Sorry this Account has been susended")
             }

             req.id = ifUserExist.id;
             next()
         }
         throw new ApiError("User not found", httpStatus.NOT_FOUND, "We couldn't find user")
     }else {
         throw new ApiError("Unauthorization credentials", httpStatus.UNAUTHORIZED, "no bearer token")
     }
    
 } catch (error) {
    console.log(error)
    res.status(httpStatus.BAD_REQUEST).send(error)
 }
}


module.exports = Auth;
