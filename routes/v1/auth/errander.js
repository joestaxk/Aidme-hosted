
const router = (require('express')).Router();
 
const authController = require('../../../controllers/erranderController/auth');

/**
    Register
    @method POST
**/

router.post('/register',  authController.register);

/**
    Login
    @method POST
**/
router.post('/login', authController.login);

/**
   FORGET PASSWORD
   @method POST
**/

router.post("/forgetPassword", authController.forgetPassword)

/**
    UPDATE PASSWORD
   @method POST
**/
router.post("/updatePassword", authController.updatePasswordByLink)

module.exports = router
