const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/register', userController.registerForm);
router.get('/login', userController.loginForm);
router.get('/profile', userController.profile);

module.exports = router;
