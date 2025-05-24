//const products = require('../db/products');
const db = require('../database/models');
let op = db.Sequelize.Op;

let productoController = {
  show: function (req, res) {
    
    db.Producto.findByPk(req.params.id)
      .then(function (producto) {

        return res.render("producto", { producto: producto });

      }).catch(function (err) {
        return res.send(err)
      })
  },

  search: function (req, res) {
    let query = req.query.search;

    db.Producto.findAll({
      where: {
        name: {
          [op.like]: '%' + query + '%'
        }
      }
    })
      .then(function (librosEncontrados) {
        return res.render("search-results", {
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
