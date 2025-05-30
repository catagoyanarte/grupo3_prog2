module.exports = function (sequelize, dataTypes) {
    let alias = 'Usuario'
    let columnas = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        email: {
            type: dataTypes.STRING
        },
        usuario: {
            type: dataTypes.STRING
        },
        contrasena: {
            type: dataTypes.STRING
        },
        foto_perfil: {
            type: dataTypes.STRING
        },
        documento: {
            type: dataTypes.STRING
        },
        fecha_nacimiento: {
            type: dataTypes.DATE
        },
        createdAt: {
            type: dataTypes.DATE,
        },
        updatedAt: {
            type: dataTypes.DATE,
        },
        deletedAt: {
            type: dataTypes.DATE,
        },
    }

    let config = {
        tableName: "usuarios",
        timestamps: false,
        underscored: false,
    };

    const Usuario = sequelize.define(alias, columnas, config);

    Usuario.associate = function (models) {
        Usuario.hasMany(models.Producto, {
            as: "productos",
            foreignKey: "id_usuario"
        })
        Usuario.hasMany(models.Comentario, {
            as: "comentarios",
            foreignKey: "id_comentario"
        })
    };

    return Usuario;
};