const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();

const UserFn = require("./Users");
const OlahragaFn = require("./Olahraga");
const KategoriFn = require("./Kategori");
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
const Kategori = KategoriFn(connection);
const Comment_makanan = Comment_makananFn(connection);
const Comment_olahraga = Comment_olahragaFn(connection);

module.exports = {
    Users,
    Olahraga,
    Makanan,
    Kategori,
    Comment_makanan,
    Comment_olahraga,
};
