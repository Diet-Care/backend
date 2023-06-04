const { DataTypes } = require("sequelize")

module.exports = function(connection){
    class Contact extends Model{}

    Contact.init({
        uuid: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        },
        pesan: {
            type: DataTypes.STRING
        }
    }, {
        sequelize: connection,
        tableName: 'kontak',
        timsestamps: false,
    });
    return Contact;
}