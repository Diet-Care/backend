const express = require('express');

const app = express();
const { handleuserall, handleuserdelete, handleUserId, handleUpdateuser} = require('../controllers/handleruser');
const { Authorization } = require('../middleware/authorization');


const get = app.get("/", (req, res) => {
    res.send("hallo anda berhasil menggunakan endpoint ini");
});

const GetAllUser = app.get("/users",  handleuserall);

const getUserId = app.get('/users/:id', Authorization, handleUserId);

const updateuser = app.put('/users/:id', handleUpdateuser);
const DeleteUser = app.delete('/users/:id', Authorization, handleuserdelete);

module.exports = {
    get,
    GetAllUser,
    getUserId,
    updateuser,
    DeleteUser
}