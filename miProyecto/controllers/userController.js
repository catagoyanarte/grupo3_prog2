//const users = require('../db/users');
//const products = require('../db/products');
const db = require('../database/models');
const bcryptjs = require("bcryptjs");

const userController = {

  show: function (req, res) {

    if (req.session.user != undefined) {
      return res.redirect('/profile' + req.session.user.id)
    } else {
      return res.render("register", { error: {} });
    }

  },
  create: function (req, res) {

    let usuario = req.body.usuario;
    let email = req.body.email;
    let contrasena = req.body.contrasena;
    let fecha_nacimiento = req.body.fecha_nacimiento;
    let error = {};

    if (usuario == "") {
      error.usuario = "Nombre de usuario obligatorio";
      return res.render("register", { error });

    }

    if (email =="") {
      error.email = "Email obligatorio";
            return res.render("register", { error });

    }

    if (contrasena =="" || contrasena.length < 3) {
      error.contrasena = "La contraseña debe tener al menos 3 caracteres";
    }

    if (fecha_nacimiento =="") {
      error.fecha_nacimiento = "La fecha de nacimiento es obligatoria";
    }

    db.Usuario.findOne({ where: { email: email } })
      .then(function (user) {
        if (user) {
          error.email = "Este email ya está registrado";
          return res.render("register", { error });
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
  showLogin: function (req, res) {
    if (req.session.usuario != undefined) {
      return res.redirect("/");
    } else {
      return res.render("login", { error: {} });
    }
  },
  createLogin: function (req, res) {
    // recupero los datos del form
    let email = req.body.email;
    let contrasena = req.body.contrasena;
    let recordarme = req.body.recordarme;
    let error_login = {};

    let userInfo = {
      email: email,
      contrasena: contrasena,
      recordarme: recordarme
    }

    // valido que email y contrasena sean correctas
    
    db.Usuario.findOne({ where: { email: email } })
    .then(function(user) {
      if (user) {
        error_login.email = "Este email no ha sido registrado";
        return res.render("login", { error_login: {} })}
    });

    let validacion = bcrypt.compareSync(req.body.contrasena, contrasena);
        if (!validacion) {
          req.session.user = contrasena;
          error_login.contrasena = "Esta contrasena no es valida";
        return res.render("login", { error_login: {} })}

    //poner al usuario en session
    req.session.user = userInfo;

    // recordarme - creo una cookie
    if (req.body.recordarme != undefined) {
      res.cookie("user", userInfo, { maxAge: 150000 });
    }

    res.redirect("/perfil")

  }
  // req.session.destroy();   --> log out 
};


    // if (userInfo.email !== email) {
    //   error.email = "Este mail no ha sido registrado.";
    // } else {
 
    // }
    // if (userInfo.contrasena !== contrasena) {
    //   error.email = "La contrasena no corresponde al mail registrado.";
    // } else {

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