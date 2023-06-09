const { Model, DataTypes } = require("sequelize")

module.exports = function(connection) {
    class Jadwal_diet extends Model {}

    Jadwal_diet.init({
        uuid: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        uuid_user: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            references: {
                model: {
                    tableName: 'users'
                },
                key: 'uuid'
            },
        },
        uuid_olahraga: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            references: {
                model: {
                    tableName: 'olahraga'
                },
                key: 'uuid'
            },
        },
        uuid_makanan: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            references: {
                model: {
                    tableName: 'makanan'
                },
                key: 'uuid'
            },
        },
        level: {
            type: DataTypes.STRING,
        },
        tgl_mulai: {
            type: DataTypes.DATE,
        },
        tgl_selesai: {
            type: DataTypes.DATE,
        }
    }, {
        sequelize: connection,
        tableName: 'jadwal_diet',
        timestamps: false,
    });
    return Jadwal_diet;
}