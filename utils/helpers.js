const httpStatus = require("http-status");
const ApiError = require("./ApiError");
const crypto = require("crypto")
const bcrypt = require("bcrypt")
const countries = require("../services/countries-service.json")

let helper = {};


helper.acceptableCountries = (country) => countries.filter(el => el.country.toLowerCase() === country.toLowerCase())
helper.acceptableGender    =  ['male', 'female']


helper.comparePassword = async function(data, encrypted) {
    try {
        const compare = await bcrypt.compare(data, encrypted);
        return compare;
    } catch (error) {
        throw new ApiError("Error with comparing password", httpStatus.BAD_REQUEST, error)
    }
}

helper.hashPassword = async function(password) {
    let saltRounds = 8;
    try {
        const hashPassword = await bcrypt.hash(password, saltRounds)
        this.password = hashPassword
    } catch (error) {
        throw new ApiError("Bcrypt error", httpStatus.BAD_REQUEST,  error)
    }
}

helper.filterObjectData = function(createData, access="", refresh="") {
    return {
        firstname: createData.firstName,
        lastname: createData.lastName,
        country: createData.country,
        gender: createData.gender,
        email: createData.email,
        isVerified: createData.isVerified,
        blacklist: createData.blacklist,
        accessToken: access.accessToken,
        refreshToken: refresh.refreshToken
    }
}

helper.createKeyToken = async function(user,conf, id=null) {
    let token = await crypto.createHash("SHA256").update(conf.JWT_SECRETKEY + (Date.now())).digest("hex")
    if(id){
        await user.findByIdAndUpdate(id, {$set: {keyToken: token} })
    }
    return token;
}

module.exports = helper;

