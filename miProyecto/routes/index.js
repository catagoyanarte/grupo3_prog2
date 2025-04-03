var express = require('express');
var router = express.Router();

const mainController = require('../controllers/mainController');
const busquedaController = require('../controllers/busquedaControllers');
const productController = require('../controllers/productController');

const aboutController = require('../controllers/aboutControllers');
const agregarController = require('../controllers/agregarControllers');
const userController = require('../controllers/userController');
const contactControllers = require('../controllers/contactControllers');

router.get('/', mainController.index);
router.get('/search', busquedaController.busqueda);
router.get('/products', productController.detalle);
router.get('/about', aboutController.index);
router.get('/contact', contactControllers.index);



module.exports = router;
