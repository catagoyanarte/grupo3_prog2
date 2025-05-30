//const users = require('../db/users');
//const products = require('../db/products');
const db = require('../database/models');
const bcryptjs = require('bcryptjs');

const userController = {

  show: function (req, res) {

    if (req.session.user != undefined) {
      return res.redirect('/register')
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
      error.usuario = "Nombre de usuario  obligatorio";
      return res.render("register", { error });

    }

    if (email == "") {
      error.email = "Email obligatorio";
      return res.render("register", { error });

    }

    if (contrasena == "" || contrasena.length < 3) {
      error.contrasena = "La contraseña debe tener al menos 3 caracteres";
      return res.render("register", { error });
    }
    if (fecha_nacimiento == "") {
      error.fecha_nacimiento = "La fecha de nacimiento es obligatoria";
      return res.render("register", { error });
    }

    db.Usuario.findOne({ where: { email: email } })
      .then(function (user) {

        if (user != undefined) {

          return res.send("El email ya existe")
        }

        db.Usuario.findOne({ where: { usuario: usuario } })

          .then(function (usuario_1) {
            if (usuario_1 != undefined) {
              return res.send("El usuario ya existe")
            }
          })


        let nuevoUsuario = {
          usuario: usuario,
          email: email,
          contrasena: bcryptjs.hashSync(contrasena, 10),
          fecha_nacimiento: fecha_nacimiento,
          createdAt: new Date()
        };
        db.Usuario.create(nuevoUsuario)
          .then(function () {
            return res.redirect("/users/login");
          })
          .catch(function (error) {
            console.log(error);
            return res.send(error);
          });
      }
      );
  },

  showLogin: function (req, res) {
    return res.render("login");
  },
  createLogin: function (req, res) {
    let userInfo = {
      id: req.body.id,
      email: req.body.email,
      password: req.body.contrasena,
      recordarme: req.body.recordarme
    };

    db.Usuario.findOne({ where: { email: userInfo.email } })
      .then(function (user) {
        if (user == undefined) {
          return res.send("este email no existe");
        }

        let validacion = bcryptjs.compareSync(userInfo.password, user.contrasena);
        if (!validacion) {
          return res.send("contrasena incorrecta");
        }

        req.session.user = {
          id: user.id,
          email: user.email,
          usuario: user.usuario
        };
        if (userInfo.recordarme != undefined) {
          res.cookie("user", user, { maxAge: 150000 });
        }

        return res.redirect("/users/profile");
      })
      .catch(function (error) {
        console.log(error);
        return res.send("error en login");
      });
  },

  logout: function (req, res) {
    req.session.destroy();
    res.clearCookie("user");
    return res.redirect("/");
  },

  profile: function (req, res) {
    if (!req.session.user || !req.session.user.id) {  // verificamos que el usuario este en session 
      return res.redirect('/users/login');
    }
    // busco al usuario en session por su id 
    db.Usuario.findByPk(req.session.user.id)
      .then(function (user) {
        if (!user) {
          return res.redirect('/users/login');
        }
        // busco los productos
        db.Producto.findAll()
          .then(function (productos) {
           // letproductosId = productos 
            let totalProductos = productos.length;
            res.render('perfil', { user, productos, totalProductos });
          });
      })
      .catch(function (error) {
        console.log(error);
        res.send("error al mostrar el perfil");
      });
  },

  perfilPorId: function (req, res) {
    let id = req.params.id;

    db.Usuario.findByPk(id)
      .then(function (usuario) {
        if (!usuario) return res.redirect('/');

        db.Producto.findAll({
          where: { id_usuario: usuario.id }
        })
          .then(function (productos) {
            res.render('perfil', {
              user: usuario,
              productos: productos,
              totalProductos: productos.length
            });
          });
      })
      .catch(function (error) {
        console.log(error);
        res.send("Error al mostrar el perfil del usuario");
      });
  },
}

module.exports = userController;