const db = require('../database/models');
const Producto = db.Producto;

const mainController = {
  index: function(req, res) {
    let relacion = {
      include: [
        {
          association: "comentarios",
          include: [ { association: "usuario" } ] 
        },
        { association: "usuario" }
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