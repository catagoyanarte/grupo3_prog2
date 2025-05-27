const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/register', userController.show);
router.post('/register', userController.create)
router.get('/login', userController.showLogin);
router.post('/login', userController.createLogin);
router.get('/logout', userController.logout);
router.get('/profile/:id?', userController.profile);

module.exports = router;
