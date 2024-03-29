const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const loginLimitter = require('../middleware/loginLimitter');


router.route('/').post(loginLimitter, authController.login);

router.route('/admin').post(authController.createUser);

router.route('/refresh').get(authController.refresh);

router.route('/logout').post(authController.logout);

module.exports = router;
