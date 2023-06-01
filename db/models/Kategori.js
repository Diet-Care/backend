const { Model, DataTypes } = require("sequelize");

module.exports = function(connection){
    class Kategori extends Model {}

    Kategori.init({
        uuid: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
          },
        id_kategori:{
            type: DataTypes.INTEGER,
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