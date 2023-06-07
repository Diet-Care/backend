const express = require('express');
const { handlelogin, handleregister, handlechangepassword } = require('../controllers/handleauth');

const app = express();

const login = app.post("/login", handlelogin);
const register = app.post("/auth/register", handleregister);
const changepassword = app.put('/users', handlechangepassword);

module.exports = {
    login,
    register,
    changepassword,
}