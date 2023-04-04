const router = (require('express')).Router();
 
const userController = require('../../../controllers/clientController/user');
const dashboardController = require('../../../controllers/clientController/dashboard');
const {ClientAuth} = require('../../../middlewares/auth');

/**
    Verify User Account - UNPROTECTED
    @method GET
**/

router.get('/verifyUserAccount', userController.verifyUserAccount);

router.get('/tasks', async (req, res) => {
    console.log("Hello");
});

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

/** 
    GET USER- PROTECTED
    @method POST
 **/

    router.post("/create/task", ClientAuth, dashboardController.createTask)
    
module.exports = router

