const listaProductos = require('../db/products');

const mainController = {
  index: function (req, res) {
      let productos= listaProductos.producto;
      res.render("index", {productos: productos })
  }
};

module.exports = mainController;