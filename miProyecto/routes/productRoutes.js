const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/add', productController.addProductForm);
router.get('/detail/:id', productController.productDetail);

module.exports = router;