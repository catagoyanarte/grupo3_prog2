//const products = require('../db/products');
let association = require('sequelize');
const db = require('../database/models');
const Producto = db.Producto;
let op = db.Sequelize.Op;

let productoController = {
  detalle: function (req, res) {
    let id = req.params.id; // recuperamos el id
    Producto.findByPk(id, {
      include: [
        {
          association: "comentarios", include: [
            { association: "usuario" }
          ]
        },
        { association: "usuario" }
      ]
    })
      .then(function (producto) {
        if (!producto) return res.redirect("/");

        db.Comentario.findAll({
          where: { id_producto: id },
          include: [{ association: "usuario" }],
          order: [['createdAt', 'DESC']]

        }).then(function (comentarios) {
          return res.render("producto", {
            producto,
            comentarios,
            session: req.session
          });
        });
      })
      .catch(function (err) {
        console.log(err);
        return res.redirect("/");
      });
  },

  agregarProductos: function (req, res) {
    return res.render("product-add");
  },

  search: function (req, res) {
    let query = req.query.search;
    error = {}

    if (query == "") {

      error.librosEncocontrados = "Ingresa un libro encontrado";
      return res.render("resultados", { error, resultados: [] });

    }


    db.Producto.findAll({
      where: {
        nombre: {
          [op.like]: '%' + query + '%'
        }
      }
    })

      .then(function (librosEncontrados) {

        return res.render("resultados", {
          resultados: librosEncontrados,
          query: query
        });
      })
      .catch(function (error) {
        return res.send(error);
      });
  }

};

module.exports = productoController;
