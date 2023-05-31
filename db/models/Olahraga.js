const { Model, DataTypes } = require("sequelize");

module.exports = function(connection) {
    class Olahraga extends Model {}

    Olahraga.init({
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
            }
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
        }
    }, {
        sequelize: connection,
        tableName: 'olahraga',
        timestamps: false,
    });
    return Olahraga;
}