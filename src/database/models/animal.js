module.exports = (sequelize,DataTypes) => {

    let alias = "Animal";

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            null: false
        },
        typeAnimal: {
            type: DataTypes.STRING,
            null: false
        }
    }

    let config = {
        tableName: "animal",
        timestamps: false
    }

    const Animal = sequelize.define (alias,cols,config);

    Animal.associate = function(models){
        Animal.hasMany(models.Producto,{
            as: "productos",
            foreignKey: "id_animal"
        });
    }

    return Animal;
}