const express = require('express');
const router = express.Router();
const userController = require('../controller/user.controller');
const authController = require('../controller/auth.controller');

router.post('/signup', userController.createUser);

router.post('/signin', userController.loginWithEmail);

router.get('/', authController.authenticate, userController.getUser);
module.exports = router;
