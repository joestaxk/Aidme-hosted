const router = (require('express')).Router();
 
const userController = require('../../../controllers/clientController/user');
const {ClientAuth} = require('../../../middlewares/auth');

/**
    Verify User Account - UNPROTECTED
    @method GET
**/

router.get('/verifyUserAccount', userController.verifyUserAccount);


/** 
    GET USER- PROTECTED
    @method GET
 **/

router.get("/me", ClientAuth, userController.getMe)

/**
    Logout - PROTECTED
    @method GET
**/
router.get("/logout", ClientAuth, userController.logout)
module.exports = router

