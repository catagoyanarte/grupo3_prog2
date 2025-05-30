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
            session: req.session,
            user: req.session.user
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
    return res.render("product-add", { error: {}, user: req.session.user, });
  },

  mostrar: function (req, res) {

     if (!req.session.user || !req.session.user.id) {
    return res.redirect("/users/login");
  }

    let nombre = req.body.nombre;
    let foto_producto = req.body.foto_producto;
    let descripcion = req.body.descripcion;

    let error = {};


    if (nombre == "") {
      error.nombre = "Nombre de producto obligatorio";
      return res.render("product-add", { error, user: req.session.user });

    }

    if (foto_producto == "") {
      error.foto_producto = "Foto del producto obligatoria";
      return res.render("product-add", { error, user: req.session.user });

    }

    if (descripcion == "") {
      error.descripcion = "Descripcion obligatoria";
      return res.render("product-add", { error, user: req.session.user });
    }



    let nuevoProducto = {
      nombre: nombre,
      foto_producto: foto_producto,
      descripcion: descripcion,
      id_usuario: req.session.user.id,
      createdAt: new Date()
    };
    db.Producto.create(nuevoProducto)
      .then(function () {
        return res.redirect("/");
      })
      .catch(function (error) {
        console.log(error);
        return res.send(error);
      });


  },
  agregarComentario: function (req,res) {
    const usuario = req.session.user;
        if (!usuario){
            return res.redirect("/users/login");
        }
        let newComentario ={
            id_usuario: usuario.id,
            id_producto: req.params.id,
            texto: req.body.texto,
            createdAt: new Date(),
            updatedAt: new Date(),
        };

        db.Comentario.create(newComentario)
        .then(function(){
            return res.redirect("/products/" + req.params.id);
        })
        .catch(function (error) {
            return res.send(error);
        })
},

  search: function (req, res) {
    let query = req.query.search;
    error = {}


    if (query == "") {
      return res.render("resultados", { error, resultados: [], usuario: req.session.usuario});

    }


    db.Producto.findAll({
      where: {
        nombre: {
          [op.like]: '%' + query + '%'
        }
      },
      include: [{ association: "usuario" }]
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
