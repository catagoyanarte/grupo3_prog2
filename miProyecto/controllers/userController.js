//const users = require('../db/users');
//const products = require('../db/products');
const db = require('../database/models');
const bcryptjs = require("bcryptjs");

const userController = {

  show: function (req, res) {

    if (req.session.user != undefined) {
      return res.redirect('/profile' + req.session.user.id)
    } else {
      return res.render("register", { error: {}, anterior: {} });
    }

  },
  create: function (req, res) {

    let usuario = req.body.usuario;
    let email = req.body.email;
    let contrasena = req.body.contrasena;
    let fecha_nacimiento = req.body.fecha_nacimiento;
    let error = {};

    if (!usuario) {
      error.usuario = "Nombre de usuario obligatorio";
    }

    if (!email) {
      error.email = "Email obligatorio";
    }

    if (!contrasena || contrasena.length < 3) {
      error.contrasena = "La contraseña debe tener al menos 3 caracteres";
    }

    if (!fecha_nacimiento) {
      error.fecha_nacimiento = "La fecha de nacimiento es obligatoria";
    }

    db.Usuario.findOne({ where: { email: email } })
      .then(function (user) {
        if (user) {
          error.email = "Este email ya está registrado";
          return res.render("register", { error, anterior: req.body });
        }


        let nuevoUsuario = {
          usuario: usuario,
          email: email,
          contrasena: bcryptjs.hashSync(contrasena, 10),
          fecha_nacimiento: fecha_nacimiento,
          //falta el created
        };

        db.Usuario.create(nuevoUsuario)
          .then(function () {
            return res.redirect("/users/login");
          })
          .catch(function (error) {
            return res.send(error);
          });

      });
  },
  login: function (req, res) {
    res.render('login');
  },
};



/*
const userController = {
  register: function(req, res) {
    res.render('register');
  },
  login: function(req, res) {
    res.render('login');
  },
  profile: function(req, res) {
    let nombreUsuario = users.usuario; 
    let productos = products.producto;
    res.render('perfil', {user: nombreUsuario, productos: productos});
  }
};*/

module.exports = userController;