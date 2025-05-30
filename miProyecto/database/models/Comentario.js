module.exports = function (sequelize, dataTypes) {
    let alias = 'Comentario';

    let columnas = {
        id_comentario: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        texto: {
            type: dataTypes.TEXT
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
        id_producto: {
            type: dataTypes.INTEGER
        },
        id_usuario: {
            type: dataTypes.INTEGER
        },
    };

    let config = {
        tableName: "comentarios",
        timestamps: true,
        underscored: false,
    };

    const Comentario = sequelize.define(alias, columnas, config);

    Comentario.associate = function (models) {
        Comentario.belongsTo(models.Usuario, {
            as: "usuario",
            foreignKey: "id_usuario"
        });

        Comentario.belongsTo(models.Producto, {
            as: "producto",
            foreignKey: "id_producto"
        });
    };


    return Comentario;
};