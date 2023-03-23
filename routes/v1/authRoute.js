const router = (require('express')).Router();
 
const authController = require('../../controllers/authController');

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

module.exports = router
