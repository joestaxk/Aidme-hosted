
const router = (require('express')).Router();
 
const userController = require('../../../controllers/erranderController/user');
const Auth = require('../../../middlewares/auth');

/**
    Verify User Account
    @method GET
**/

router.get('/verifyUserAccount', Auth, userController.verifyUserAccount);

module.exports = router
