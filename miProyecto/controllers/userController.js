const users = require('../db/users');
const products = require('../db/products');
const db = require('../database/models');

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
};

module.exports = userController;