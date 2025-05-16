const products = require('../db/products');

const productoController = {
  detalle: function (req,res) {
    let producto = products.producto[0];
    res.render('producto', {producto});
  }
<<<<<<< HEAD
};p
=======
};
>>>>>>> bb2311ace492569e0715b2baf2174a47be67b40d
module.exports = productoController;