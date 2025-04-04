const products = require('../db/products');

const productoController = {
  detalle: function (req,res) {
    let producto = products.producto;
    res.render('producto', {producto});
  }
};

module.exports = productoController;