const { Model, DataTypes } = require("sequelize");

module.exports = function(connection) {
    class Olahraga extends Model {}

    Olahraga.init({
        uuid: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
          },
        judul:{
            type: DataTypes.STRING,
        },
        deskripsi_singkat:{
            type: DataTypes.STRING,
        },
        deskripsi_lengkap:{
            type: DataTypes.STRING,
        },
        img:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        tips:{
            type: DataTypes.STRING,
        },
        jumlah_kalori:{
            type: DataTypes.STRING,
        },
        level: {
            type: DataTypes.STRING,
        },
        kategori: {
            type: DataTypes.ENUM('makanan', 'olahraga'),
        }
    }, {
        sequelize: connection,
        tableName: 'olahraga',
        timestamps: false,
    });
    return Olahraga;
}