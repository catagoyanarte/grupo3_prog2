const users = require('../db/users');

module.exports = {
  home: function(req, res) {
    const usuario = users.usuario;
    res.render('index', { usuario });
  },
  searchResults: function(req, res) {
    res.render('searchResults');
  }
};