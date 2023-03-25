const router = (require("express")).Router();
const serviceController = require("../../controllers/serviceController")

/**
    Get Countries, States, Flag, ...
    @method GET
**/

router.get("/getCountries", serviceController.getCountries)

/**
    Get Task Categories
    @method GET
**/

router.get("/getTaskCategories", serviceController.getTaskCategories)

module.exports = router
