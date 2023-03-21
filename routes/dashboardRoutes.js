const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');

const loginVerified = require('../services/auth-service');


router.get('/dashboard', loginVerified, dashboardController.dashboard);

module.exports = router;
