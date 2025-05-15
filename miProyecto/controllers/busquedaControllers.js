const busquedaControllers =  {
  busqueda: function(req, res) {
    const requerimiento = req.query.search;
    
    const resultados = [

        { nombreLibro: "Libro 1", description: "Descripción del producto 1" },
        { nombreLibro: "Libro 2", description: "Descripción del producto 2" },
        { nombreLibro: "Libro 3", description: "Descripción del producto 3" }
    ];

    res.render('resultados', { resultados });
  }
};

module.exports = busquedaControllers;