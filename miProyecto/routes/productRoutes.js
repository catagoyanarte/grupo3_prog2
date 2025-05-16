var express = require('express');
var router = express.Router();

const productController = require('../controllers/productController');
<<<<<<< HEAD
router.get('/:id', productController.detalle); 
=======
router.get('/:id', userController.detalle); 
>>>>>>> bb2311ace492569e0715b2baf2174a47be67b40d

module.exports = router;