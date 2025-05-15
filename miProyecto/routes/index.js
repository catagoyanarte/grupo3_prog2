var express = require('express');
var router = express.Router();

const mainController = require('../controllers/mainController');
const busquedaController = require('../controllers/busquedaControllers');
const productController = require('../controllers/productController');

router.get('/', mainController.index);
router.get('/search', busquedaController.busqueda);
router.get('/products/:id', userController.detalle);

module.exports = router;
