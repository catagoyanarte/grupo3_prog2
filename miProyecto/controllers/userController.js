const users = require('../db/users');

module.exports = {
  registerForm: function(req, res) {
    res.render('register');
  },
  loginForm: function(req, res) {
    res.render('login');
  },
  profile: function(req, res) {
    const user = users[0]; 
    res.render('profile', { user });
  }
};