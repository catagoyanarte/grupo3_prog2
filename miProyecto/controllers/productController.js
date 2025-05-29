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

  agregarproducto: function (req, res) {
    if (!req.session.user) {
      return res.redirect('/users/login');
    }
    return res.render("product-add");
  },

  showAgregarProducto: function (req, res) {

    let nombre = req.body.nombre;
    let foto_producto = req.body.foto_producto;
    let descripcion = req.body.descripcion;
    let createdAt = req.body.createdAt;
    let updatedAt = req.body.updatedAt;
    let deletedAt = req.body.deletedAt;
    let id_usuario = req.body.id_usuario;
    let error = {};


  },
  search: function (req, res) {
    let query = req.query.search;
    error = {}

    if (query == "") {
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
