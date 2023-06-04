const express = require('express');

const app = express();
const { handleuserall, handleuserdelete, handleUserId} = require('../controllers/handleruser');
const { Authorization } = require('../middleware/authorization');


const get = app.get("/", (req, res) => {
    res.send("hallo anda berhasil menggunakan endpoint ini");
});

const GetAllUser = app.get("/users", Authorization,handleuserall);

const getUserId = app.get('/users/:id', Authorization,handleUserId);

const DeleteUser = app.delete('/users/:id', Authorization, handleuserdelete);

module.exports = {
    get,
    GetAllUser,
    getUserId,
    DeleteUser
}