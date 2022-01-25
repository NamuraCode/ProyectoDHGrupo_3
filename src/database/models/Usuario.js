module.exports = (sequelize, dataTypes) => {
    let alias = "Usuarios"
    let colums = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        username: {
            type: dataTypes.STRING,
            allowNull: false
        },
        email: {
            type: dataTypes.STRING,
            allowNull: false
        },
        image:{
            type: dataTypes.STRING
        },
        password: {
            type: dataTypes.STRING,
            allowNull: false
        },
        perfiles_id:{
            type: dataTypes.INTEGER,
            allowNull: false
        }
    }
    let config = {
        tableName: "usuarios",
        timestamps: false
    }
    const Usuario = sequelize.define(alias, colums, config)
    Usuario.associate = (modelos) => {
        Usuario.belongsTo(modelos.Perfiles, {
            as: "perfiles",
            foreignKey: "perfiles_id"
        })
        Usuario.hasMany(modelos.Productos, {
            as: "productos",
            foreignKey: "usuarios_id"
        })
       
    }
    return Usuario
}