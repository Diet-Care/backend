const { Model, DataTypes } = require("sequelize");

module.exports = function(connection) {
    class Makanan extends Model {}

    Makanan.init({
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        id_kategori:{
            type: DataTypes.INTEGER,
            references: {
                model: {
                    tableName: 'kategori'
                },
                key: 'id'
            },
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
        }
    }, {
        sequelize: connection,
        tableName: 'makanan',
        timestamps: false,
    });
    return Makanan;
}