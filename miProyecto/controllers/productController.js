//const products = require('../db/products');
const db = require('../database/models');

const productoController = {
  detalle: function (req,res) {
    let producto = products.producto[0];
    res.render("producto", {producto});
  }
};


module.exports = productoController;

