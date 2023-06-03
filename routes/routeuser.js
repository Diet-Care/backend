const express = require('express');

const app = express();
const { handleuserall, handleuserdelete} = require('../controllers/handleruser');

const get = app.get("/", (req, res) => {
    res.send("hallo anda berhasil menggunakan endpoint ini");
});

const GetAllUser = app.get("/users", handleuserall);

const DeleteUser = app.delete('/users/:id', handleuserdelete);

module.exports = {
    get,
    GetAllUser,
    DeleteUser
}