var express = require('express');
var router = express.Router();

const productController = require('../controllers/productController');
router.get('/products/:id', productController.detalle); 

module.exports = router;