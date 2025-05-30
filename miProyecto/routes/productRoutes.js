var express = require('express');
var router = express.Router();

const productController = require('../controllers/productController');

router.get('/search', productController.search); 
router.get('/productAdd', productController.agregarproducto); 
router.post('/productAdd', productController.mostrar); 
router.post('/comentarios/:id', productController.agregarComentario);
router.get('/:id', productController.detalle); 

module.exports = router;