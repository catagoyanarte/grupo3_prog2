const busquedaControllers =  {
  busqueda: function(req, res) {
    const res = req.query.search;
    
    const resultados = [

        { nombre: "Libro 1", descripcion: "Descripción del producto 1" },
        { nombre: "Libro 2", descripcion: "Descripción del producto 2" },
        { nombre: "Libro 3", descripcion: "Descripción del producto 3" }
    ];

    res.render('busqeudaControllers', { resultados, res});
  }
};

module.exports = busquedaControllers;