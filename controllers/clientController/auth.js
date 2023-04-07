const { parse } = require('dotenv');
const httpStatus = require('http-status');
const config = require('../../config/config');
const Client = require('../../models/client/user');
const send_mail = require('../../services/email-service');
const ApiError = require('../../utils/ApiError');
const helper = require('../../utils/helpers');
const { acceptableGender, acceptableCountries, comparePassword, filterObjectData, hashPassword, createKeyToken } = require("../../utils/helpers")

let authController = {};


authController.register = async function(req, res, next) {
    const {
        firstName,
        lastName,
        email,
        phoneNumber,
        address,
        country,
        state,
        countryCode,
        gender,
        password
    } = req.body

    try {
        // sanitize req body.

            // common data validation [*]
        const emailReg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        if(!firstName || !/^[a-z]+$/i.test(firstName)) throw new ApiError("WRONG CREDENTIALS", httpStatus.NOT_ACCEPTABLE, "Firstname should be alphabet.")
        else if(!lastName || !/^[a-z]+$/i.test(lastName) ) throw new ApiError("WRONG CREDENTIALS", httpStatus.NOT_ACCEPTABLE, "Lastname should be alphabet.")
        else if(!email || !emailReg.test(email)) throw new ApiError("WRONG CREDENTIALS", httpStatus.NOT_ACCEPTABLE, "Invalid email specified.")
        else if(!phoneNumber || !/^[0-9]{10,10}$/.test(phoneNumber)) throw new ApiError("WRONG CREDENTIALS", httpStatus.NOT_ACCEPTABLE, "Phone number should be 10 digit.")
        else if(!address || address.length < 5) throw new ApiError("WRONG CREDENTIALS", httpStatus.NOT_ACCEPTABLE, "Be specific about your address")
        else if(!countryCode || countryCode?.length  < 3 || countryCode?.length > 3) throw new ApiError("WRONG CREDENTIALS", httpStatus.NOT_ACCEPTABLE, "Invalid country code.")
        else if(!country || !acceptableCountries(country).length) throw new ApiError("WRONG CREDENTIALS", httpStatus.NOT_ACCEPTABLE, "Invalid country name.")
        else if(!state) throw new ApiError("WRONG CREDENTIALS", httpStatus.NOT_ACCEPTABLE, "Invalid state specified.")
        else if(!acceptableGender.includes(gender)) throw new ApiError("WRONG CREDENTIALS", httpStatus.NOT_ACCEPTABLE, "Gender should be male or female.")
        else if(!password) throw new ApiError("WRONG CREDENTIALS", httpStatus.NOT_ACCEPTABLE, "Password field is invalid.")
        else if(password) {
            // not alphanumeric
            if(!/[0-9]/.test(password))  throw new ApiError("WRONG CREDENTIALS", httpStatus.NOT_ACCEPTABLE, "Password should contain a numeric value.")
            if(!/[A-Z]/.test(password))  throw new ApiError("WRONG CREDENTIALS", httpStatus.NOT_ACCEPTABLE, "Password should contain a uppercase value.")
            if(!/[a-z]/.test(password))  throw new ApiError("WRONG CREDENTIALS", httpStatus.NOT_ACCEPTABLE, "Password should contain a lowercase value.")
            if(!/[~!@#$%^&*()_+{}|:";'<>?,./\/]/.test(password))  throw new ApiError("WRONG CREDENTIALS", httpStatus.NOT_ACCEPTABLE, "Password should contain a symbol !@#$%.")
            // not > 7
            if(password?.length < 8 && password?.length > 16) throw new ApiError("WRONG CREDENTIALS", httpStatus.NOT_ACCEPTABLE, "Password length be greater than or equal to 8 and less than 17.")
        }

        return;


        if (!firstName || !lastName || !email || !phoneNumber ||
            !address ||!countryCode || !country || !state || !gender ||
            !password
        ) {
            throw new ApiError("WRONG CREDENTIALS", httpStatus.NOT_ACCEPTABLE, "You have provided wrong data!")
        }

        // futher validations
        // password -- what are we validating in password?

        // if user already exist?
        const ifExist = await Client.findOne({ email });

        if (ifExist) {
            throw new ApiError("AVOID DUPLICATE", httpStatus.NOT_ACCEPTABLE, "User already exists")
        }

        const createData = new Client({
            firstName:firstName.trim().toLowerCase(),
            lastName: lastName.trim().toLowerCase(),
            email: email.trim(),
            phoneNumber:phoneNumber.trim(),
            address:address.trim(),
            country: country.trim(),
            countryCode: countryCode.trim(),
            state: state.trim(),
            gender: gender.trim(),
            password: password.trim(),
            keyToken: (await helper.createKeyToken(null, config, null))
        })

        const access = await createData.generateToken(createData.id, createData.email)
        const refresh = await createData.generateRefreshToken(access.accessToken, false)

        // verify email - TEST PURPOSE HERE
        const htmlMarkup = `
           <h2>Hello, ${firstName}</h2>
            <img src="cid:uniq-mailtrap.png" alt="mailtrap"/>
           <p>Welcome to Aidme, take a step further by verifying your account</p>
           <a href=/verifyAccount?token=${createData.keyToken}>Verify account</a>
        `
        const text = "Welcome to Aidme, take a step further by verifying your account"

        // Send using cb        // Send using cb
       send_mail("Verification Link sent", text, htmlMarkup, email, async function(done, err) {
            if(err) {
                //throw new ApiError("Verification error", httpStatus.BAD_REQUEST,"Couldn't send Verification mail. check network connection")
                return res.status(httpStatus.BAD_REQUEST).send({message: "Couldn't send Verification mail. check network connection"})
            }

            await createData.save();
            res.status(httpStatus.CREATED).send({ message: "Verification link has been sent to your mailbox.", data: filterObjectData(createData, access, refresh) })
        })

    } catch (error) {
        console.log(error)
        res.status(httpStatus.BAD_REQUEST).send(error)
    }

}


authController.login = async function(req, res, next) {
    const { email, password } = req.body;

    let emailReg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    try {
        if (!emailReg.test(email) || !password.length) {
            throw new ApiError("WRONG CREDENTIALS", httpStatus.NOT_ACCEPTABLE, "Wrong credentials")
        }

        const ifExist = await Client.findOne({ email });
        if (!ifExist) {
            throw new ApiError("NO ACCOUNT", httpStatus.NOT_ACCEPTABLE, "Account doesn't exist!")
        }

        const oldPassword = ifExist.password;
        if ( !(await comparePassword(password.trim(), oldPassword)) ) {
            throw new ApiError("WRONG PASSWORD", httpStatus.NOT_ACCEPTABLE, "Incorrect credentials")
        }

        // if blacklisted
        if (ifExist.isBlacklisted) {
            throw new ApiError("User Account Suspended", httpStatus.UNAUTHORIZED, "Sorry this Account has been susended")
        }

        if (!ifExist.isVerified) {
            throw new ApiError("Verify Account", httpStatus.UNAUTHORIZED, "Account is not verified")
        }

        const access = await ifExist.generateToken(ifExist.id, ifExist.email)
        const refresh = await ifExist.generateRefreshToken(access.accessToken, false)
        res.status(httpStatus.OK).send({ message: "User logged in successfully", data: filterObjectData(ifExist, access, refresh) })

    } catch (error) {
        console.log(error)
        res.status(httpStatus.BAD_REQUEST).send(error)
    }
}


  authController.forgetPassword = async function(req, res, next) {
    const {email} = req.body;

    // validate email
     let emailReg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    // if valid
    try {
        if(!emailReg.test(email)){
            throw new ApiError("Invalid Email", httpStatus.NOT_ACCEPTABLE, "Email is not valid")
        }

        const ifExist = await Client.findOne({email});

        if(!ifExist) {
            throw new ApiError("Not found", httpStatus.NOT_FOUND, "User was not found")
        }

        if (!ifExist.isVerified) {
            throw new ApiError("Verify Account", httpStatus.UNAUTHORIZED, "Account is not verified")
        }
        // if blacklisted
        if (ifExist.isBlacklisted) {
            throw new ApiError("User Account Suspended", httpStatus.UNAUTHORIZED, "Sorry this Account has been susended")
        }

        const keyToken = await createKeyToken(Client, config, ifExist.id)

        // SEND MAIL
        const htmlMarkup = `
           <h2>Hello, ${ifExist.firstName}</h2>
            <p>Welcome to Aidme, You seem to forget your password, make sure this request was sent by you. Click the link below to change password</p>
           <a href=/updatepassword?token=${keyToken}>Verify account</a>
        `
        const text = "Welcome to Aidme"

        // Send using cb
        send_mail("Change password link sent", text, htmlMarkup, email, async function(done, err) {
            if(err) {
                //throw new ApiError("Verification error", httpStatus.BAD_REQUEST,"Couldn't send Verification mail. check network connection")
                return res.status(httpStatus.BAD_REQUEST).send({message: "Couldn't send Change of Password link. check network connection"})
            }

            res.status(httpStatus.CREATED).send({ message: "Change of password link sent to mail box"})
        })

 

    } catch (error) {
        console.log(error)
       res.status(httpStatus.BAD_REQUEST).send(error)
    }
}

authController.updatePasswordByLink = async function(req,res) {
    const token = req.query?.token;
    const { newPassword, confirmPassword } = req.body;


    try {
        if(newPassword.length < 8 || confirmPassword !== newPassword) throw new ApiError("Invalid password", httpStatus.NOT_ACCEPTABLE, "Password is not valid, password should be >= 8 and equal")

        if(!token) throw new ApiError("Invalid link", httpStatus.NOT_ACCEPTABLE, "Invalid forget password link");

        const findToken = await Client.findOne({keyToken: token});

        if(!findToken) throw new ApiError("User not found", httpStatus.NOT_FOUND, "User is not found");

        // compare password
       /** if(!(await comparePassword(oldPassword.trim(), findToken.password)))  {
            throw new ApiError("Incorrect password", httpStatus.NOT_ACCEPTABLE, "Password is not wrong")
        } **/

        // when to change password
        if(parseInt(findToken.nextChangePassword) > Date.now()) throw new ApiError("Wait for 24hrs", httpStatus.NOT_ACCEPTABLE, `You can't change password until ${(new Date(findToken.nextChangePassword)).toLocaleString()}`)


        // update password once every 24hrs
        const timestamp = Date.now() + (1000*60*60*24);
        const updated = await Client.findByIdAndUpdate(findToken.id, {$set: {password: (await hashPassword(newPassword)), keyToken: "", nextChangePassword: timestamp}})

        if(updated) res.send({message: "Password has been successfully changed. Go to login"}) 
                //throw new ApiError("Verification error", httpStatus.BAD_REQUEST,"Couldn't send Verification mail. check network connection")
    } catch (error) {
        res.status(httpStatus.BAD_REQUEST).send(error)
    }

}
module.exports = authController;
