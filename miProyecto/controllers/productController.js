const products = require('../db/products');

const productoController = {
  detalle: function (req,res) {
    let producto = products.producto;
    res.render('product', {productos: producto})
  }
};

module.exports = productoController;