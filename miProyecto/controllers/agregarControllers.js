const usuario = require("../db/users"); //require es un metodo de node. Haciedno esta ruta le indicas a node a donde tiene que buscar el modulo.

const addProducto = {
    addProducto: function (req, res) {
        let usuarioLogueado = usuario.usuario;
        res.render("addProducto", { usuarioLogueado });
    }
};

module.exports = addProducto;