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
        judul_olahraga:{
            type: DataTypes.STRING,
        },
        deskripsi_singkat:{
            type: DataTypes.STRING,
        },
        deskripsi_lengkap:{
            type: DataTypes.STRING,
        },
        img_olahraga:{
            type: DataTypes.STRING,
        },
        tips_olahraga:{
            type: DataTypes.STRING(255),
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