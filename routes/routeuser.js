const express = require('express');

const app = express();
const { handleuserall, handleuserdelete, handleUserId, handleUpdateuser} = require('../controllers/handleruser');

const get = app.get("/", (req, res) => {
    res.send("hallo anda berhasil menggunakan endpoint ini");
});

const GetAllUser = app.get("/users",  handleuserall);

const getUserId = app.get('/users/:id', handleUserId);

const updateuser = app.put('/users/:id', handleUpdateuser);
const DeleteUser = app.delete('/users/:id',  handleuserdelete);

module.exports = {
    get,
    GetAllUser,
    getUserId,
    updateuser,
    DeleteUser
}