const router = (require('express')).Router();
 
const userController = require('../../controllers/userController');
const Auth = require('../../middlewares/auth');

/**
    Verify User Account
    @method GET
**/

router.post('/verifyUserAccount', Auth,  userController.verifyUserAccount);

module.exports = router
