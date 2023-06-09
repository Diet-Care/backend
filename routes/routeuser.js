const express = require('express');

const app = express();
const { handleuserall, handleuserdelete, handleUserId, handleUpdateuser} = require('../controllers/handleruser');
const { admin, auth } = require('../middleware/auth');


const GetAllUser = app.get("/users", auth, handleuserall);

const getUserId = app.get('/users/:id', auth, handleUserId);

const updateuser = app.put('/users/:id', auth, handleUpdateuser);
const DeleteUser = app.delete('/users/:id',  auth, admin, handleuserdelete);

module.exports = {
    GetAllUser,
    getUserId,
    updateuser,
    DeleteUser
}