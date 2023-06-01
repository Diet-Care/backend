const { Model, DataTypes } = require("sequelize");

module.exports = function(connection) {
    class Comment_olahraga extends Model {}

    Comment_olahraga.init({
        uuid: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
          },
        id_olahraga:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            references: {
                model: {
                    tableName: 'olahraga'
                },
                key: 'uuid'
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
        tableName: 'comment_olahraga',
        timestamps: false,
    });
    return Comment_olahraga;
}