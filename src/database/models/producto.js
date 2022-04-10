const Sequelize = require('sequelize');

module.exports = (sequelize,DataTypes) => {

    let alias = "Producto";

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
        price: {
            type: DataTypes.DOUBLE,
            null: false
        },
        discount: {
            type: DataTypes.INTEGER,
            null: false
        },
        description: {
            type: DataTypes.TEXT,
            null: false
        },
        image: {
            type: DataTypes.STRING,
            null: false
        },
        qty: {
            type: DataTypes.INTEGER,
            null: false
        },
        createDate: {
            type: 'TIMESTAMP',
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            null: false,
        },
        editDate: {
            type: 'TIMESTAMP',
            null: true,
        },
        removeDate: {
            type: 'TIMESTAMP',
            null: true,
        },
        id_animal: {
            type: DataTypes.INTEGER,
            foreingKey: true,
            null: true,
            default: null
        },
        id_categoria: {
            type: DataTypes.INTEGER,
            foreingKey: true,
            null: true,
            default: null
        }
    }

    let config = {
        tableName: "producto",
        timestamps: true,
        paranoid: true,
        createdAt: "createDate",
        deletedAt: "removeDate",
        updatedAt: "editDate"
    }

    const Producto = sequelize.define (alias,cols,config);

    Producto.associate = function(models){
        Producto.belongsTo(models.Animal,{
            as: "animales",
            foreignKey: "id_animal"
        });
        Producto.belongsTo(models.Categoria,{
            as: "categorias",
            foreignKey: "id_categoria"
        });
        Producto.belongsToMany(models.Usuario,{
            as: "usuarios",
            through: "productoUsuario",
            foreignKey: "id_producto",
            otherKey: "id_usuario",
            timestamps: false
        });
    }

    return Producto;
}