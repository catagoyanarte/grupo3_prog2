const usuario = require("../db/users");

const addProducto = {
    addProducto: function (req, res) {
        let usuarioLogueado = usuario.usuario;
        res.render("addProducto", { usuarioLogueado });
    }
};

module.exports = addProducto;