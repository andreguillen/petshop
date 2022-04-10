module.exports = (sequelize,DataTypes) => {

    let alias = "Usuario";

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            null: false
        },
        name: {
            type: DataTypes.STRING,
            null: false
        },
        lastName: {
            type: DataTypes.STRING,
            null: false
        },
        email: {
            type: DataTypes.STRING,
            null: false
        },
        telephone: {
            type: DataTypes.STRING,
            null: false
        },
        password: {
            type: DataTypes.STRING,
            null: false
        },
        image: {
            type: DataTypes.STRING,
            null: false
        },
        type: {
            type: DataTypes.INTEGER,
            null: false
        }
    }

    let config = {
        tableName: "usuario",
        timestamps: false
    }

    const Usuario = sequelize.define (alias,cols,config);

    Usuario.associate = function(models){
        Usuario.belongsToMany(models.Producto,{
            as: "productos",
            through: "productoUsuario",
            foreignKey: "id_usuario",
            otherKey: "id_producto",
            timestamps: false
        });
    }

    return Usuario;
}