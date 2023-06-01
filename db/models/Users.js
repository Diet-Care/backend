const { Model, DataTypes } = require("sequelize");

module.exports = function (connection) {
    class Users extends Model {}

    Users.init({
        uuid: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
          },
        name:{
            type: DataTypes.STRING(255),
        },
        email:{
            type: DataTypes.STRING,
        },
        password:{
            type: DataTypes.STRING(255),
        },
        role:{
            type: DataTypes.ENUM('admin', 'user')
        },
        alamat:{
            type: DataTypes.STRING(255),
        },
        img_profile:{
            type: DataTypes.STRING,
        }
    }, {
        sequelize: connection,
        tableName: 'users',
        timestamps: false,
    });

    return Users;
};