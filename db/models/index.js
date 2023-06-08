const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();

const UserFn = require("./Users");
const OlahragaFn = require("./Olahraga");
const MakananFn = require("./Makanan");
const Comment_makananFn = require("./Comment_makanan");
const Comment_olahragaFn = require("./Comment_olahraga");

const connection = new Sequelize ({
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
});

const Users = UserFn(connection);
const Olahraga = OlahragaFn(connection);
const Makanan = MakananFn(connection);
const Comment_makanan = Comment_makananFn(connection);
const Comment_olahraga = Comment_olahragaFn(connection);

Comment_olahraga.hasOne(Olahraga, {
    sourceKey: 'id_olahraga',
    foreignKey: 'uuid',
    as: 'olahraga'
});

Olahraga.hasMany(Comment_olahraga, {
    sourceKey: 'uuid',
    foreignKey: 'id_olahraga',
    as: 'comment_olahraga'
});

Comment_makanan.hasOne(Makanan, {
    sourceKey: 'id_makanan',
    foreignKey: 'uuid',
    as: 'makanan'
});

Makanan.hasMany(Comment_makanan, {
    sourceKey: 'uuid',
    foreignKey: 'id_makanan',
    as: 'comment_makanan'
});

module.exports = {
    Users,
    Olahraga,
    Makanan,
    Comment_makanan,
    Comment_olahraga,
};
