var express = require('express');
var router = express.Router();

const productController = require('../controllers/productController');

router.get('/search', productController.search); 
router.get('/productAdd', productController.agregarproducto); 
router.get('/:id', productController.detalle); 

//router.get('/productAdd', productController.showAgregarproducto); 





module.exports = router;