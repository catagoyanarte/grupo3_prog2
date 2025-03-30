const products = require('../data/products');
const comments = require('../data/comments');
const users = require('../data/users');

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