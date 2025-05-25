var express = require('express');
var router = express.Router();

const productController = require('../controllers/productController');
router.get('/search', productController.search); 
router.get('/:id', productController.detalle); 



module.exports = router;