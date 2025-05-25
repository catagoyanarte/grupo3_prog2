module.exports = function (sequelize, dataTypes) {
    let alias = 'Producto';

    let columnas = {
        id_producto: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        nombre: {
            type: dataTypes.STRING
        },
        foto_producto: {
            type: dataTypes.STRING
        },
        descripcion: {
            type: dataTypes.STRING
        },
        createdAt: {
            type: dataTypes.DATE
        },
        updatedAt: {
            type: dataTypes.DATE
        },
        deletedAt: {
            type: dataTypes.DATE
        },
        id_usuario: {
            type: dataTypes.INTEGER
        },
    };

    let config = {
        tableName: "productos",
        timestamps: false,
        underscored: false,
    };

    const Producto = sequelize.define(alias, columnas, config);


    Producto.associate = function (models) {
        Producto.belongsTo(models.Usuario, {
            as: "usuario",
            foreignKey: "id_usuario"
        });
        
        Producto.hasMany(models.Comentario, {
            as: "comentarios",
            foreignKey: "id_producto"
        });
    };

    return Producto;
};