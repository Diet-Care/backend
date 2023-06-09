const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();

const UserFn = require("./Users");
const OlahragaFn = require("./Olahraga");
const MakananFn = require("./Makanan");
const Comment_makananFn = require("./Comment_makanan");
const Comment_olahragaFn = require("./Comment_olahraga");
const KontakFn = require("./Kontak");
const Jadwal_dietFn = require("./Jadwal_diet");

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
const Kontak = KontakFn(connection);
const Jadwal_diet = Jadwal_dietFn(connection);

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

Jadwal_diet.hasMany(Makanan, {
    sourceKey: 'uuid_makanan',
    foreignKey: 'uuid',
    as: 'makanan'
});

Jadwal_diet.hasMany(Olahraga, {
    sourceKey: 'uuid_olahraga',
    foreignKey: 'uuid',
    as: 'olahraga'
});

Jadwal_diet.hasOne(Users, {
    sourceKey: 'uuid_user',
    foreignKey: 'uuid',
    as: 'user'
});

Makanan.hasOne(Jadwal_diet, {
    sourceKey: 'uuid',
    foreignKey: 'uuid_makanan',
    as: 'jadwal_diet'
});

Olahraga.hasOne(Jadwal_diet, {
    sourceKey: 'uuid',
    foreignKey: 'uuid_olahraga',
    as: 'jadwal_diet'
});

Users.hasOne(Jadwal_diet, {
    sourceKey: 'uuid',
    foreignKey: 'uuid_user',
    as: 'jadwal_diet'
});


module.exports = {
    Users,
    Olahraga,
    Makanan,
    Comment_makanan,
    Comment_olahraga,
    Kontak,
    Jadwal_diet
};
