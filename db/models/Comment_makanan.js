const { Model, DataTypes } = require("sequelize");

module.exports = function(connection) {
    class Comment_makanan extends Model{}

    Comment_makanan.init({
        uuid: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
          },
        id_makanan:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            references: {
                model: {
                    tableName: 'makanan'
                },
                key: 'uuid'
            }
        },
        bintang:{
            type: DataTypes.CHAR,
        },
        comment_review:{
            type: DataTypes.STRING,
        }
    }, {
        sequelize: connection,
        tableName: 'comment_makanan',
        timestamps: false,
    });
    return Comment_makanan;
}