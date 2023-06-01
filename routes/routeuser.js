const express = require('express');

const app = express();
const { handleuserall} = require('../controllers/handleruser');

const get = app.get("/", (req, res) => {
    res.send("hallo anda berhasil menggunakan endpoint ini");
});

const GetAllUser = app.get("/users", handleuserall);

module.exports = {
    get,
    GetAllUser
}