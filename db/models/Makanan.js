const { Model, DataTypes } = require("sequelize");

module.exports = function(connection) {
    class Makanan extends Model {}

    Makanan.init({
        uuid: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
          },
        judul_makanan:{
            type: DataTypes.STRING,
        },
        deskripsi_singkat:{
            type: DataTypes.STRING,
        },
        deskripsi_lengkap:{
            type: DataTypes.STRING(255),
        },
        img_makanan:{
            type: DataTypes.STRING,
        },
        tips_makanan:{
            type: DataTypes.STRING(255),
        },
        jumlah_kalori:{
            type: DataTypes.STRING,
        },
        level: {
            type: DataTypes.STRING,
        },
        kategori:{
            type: DataTypes.ENUM('makanan', 'olahraga'),
        }
    }, {
        sequelize: connection,
        tableName: 'makanan',
        timestamps: false,
    });
    return Makanan;
}