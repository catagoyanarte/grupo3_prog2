//const listaProductos = require('../db/products');
const db = require('../database/models');
const Producto = db.Producto;

//const mainController = {
//  index: function (req, res) {
//      let productos= listaProductos.producto;
//      res.render("index", {productos})
//  }
//};  -> este codigo corresponde a la primera entrega

const mainController = {
  index: function(req, res) {
    let relacion = {
      include: [
        {association: "usuarios"},
        {association: "comentarios"},
      ]
    }
    Producto.findAll(relacion)
    .then(function(resultados){
      return res.render("index", {productos: resultados})
    })
    .catch(function (error) {
      console.log(error)
    })
}};

module.exports = mainController;



