const express = require('express');

const app = express();
const { handleuserall, handleuserdelete, handleUserId, handleUpdateuser} = require('../controllers/handleruser');
const { auth } = require('../middleware/auth');


const GetAllUser = app.get("/users",  handleuserall);

const getUserId = app.get('/users/:id', auth,  handleUserId);

const updateuser = app.put('/users/:id', handleUpdateuser);
const DeleteUser = app.delete('/users/:id',  handleuserdelete);

module.exports = {
    GetAllUser,
    getUserId,
    updateuser,
    DeleteUser
}