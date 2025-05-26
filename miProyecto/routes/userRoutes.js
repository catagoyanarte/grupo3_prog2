const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/register', userController.show);
router.post('/newuser', userController.create)
router.get('/login', userController.showLogin);
router.post('/login', userController.createLogin);
//router.get('/profile/:id?', userController.profile);

module.exports = router;
