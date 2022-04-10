module.exports = (sequelize,DataTypes) => {

    let alias = "ProductoUsuario";

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            null: false
        },
        id_usuario: {
            type: DataTypes.INTEGER,
            foreingKey: true,
            null: true,
            default: null
        },
        id_producto: {
            type: DataTypes.INTEGER,
            foreingKey: true,
            null: true,
            default: null
        },
        type: {
            type: DataTypes.INTEGER,
            null: false
        },
        qty: {
            type: DataTypes.INTEGER,
            null: false
        },
        date: {
            type: DataTypes.DATEONLY,
            null: false
        },
        price: {
            type: DataTypes.DOUBLE,
            null: false
        }
    }

    let config = {
        tableName: "productoUsuario",
        timestamps: false
    }

    const ProductoUsuario = sequelize.define (alias,cols,config);
    return ProductoUsuario;
}