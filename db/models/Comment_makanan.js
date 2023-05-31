const { Model, DataTypes } = require("sequelize");

module.exports = function(connection) {
    class Comment_makanan extends Model{}

    Comment_makanan.init({
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        id_olahraga:{
            type: DataTypes.INTEGER,
            references: {
                model: {
                    tableName: 'olahraga'
                },
                key: 'id'
            }
        },
        bintang:{
            type: DataTypes.CHAR,
        },
        comment_review:{
            type: DataTypes.STRING(255),
        }
    }, {
        sequelize: connection,
        tableName: 'comment_makanan',
        timestamps: false,
    });
    return Comment_makanan;
}