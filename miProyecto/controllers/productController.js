const comments = require('../db/comments');
const users = require('../db/users');

module.exports = {
  addProductForm: function(req, res) {
    const user = users[0];
    res.render('addProduct', { user });
  },
  productDetail: function(req, res) {
    const product = products[0];
    res.render('productDetail', { product, comments });
  }
};