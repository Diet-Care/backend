const { Model, DataTypes } = require("sequelize");

module.exports = function(connection){
    class Kategori extends Model {}

    Kategori.init({
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nama_kategori:{
            type: DataTypes.STRING,
        },
        deskripsi_kategori:{
            type: DataTypes.STRING,
        },
    }, {
        sequelize: connection,
        tableName: 'kategori',
        timestamps: false,
    });
    return Kategori;
};