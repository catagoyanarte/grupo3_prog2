//const products = require('../db/products');
//const db = require('../database/models');


const productoController = {
  detalle: function (req, res) {

    Producto.findAll()
      .then(function (productos) {
        let producto = productos[0];
        res.render("producto", { producto });
      })
      .catch(function (error) {
        return res.send(error);
      })
  }
};





module.exports = productoController;

