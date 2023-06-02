const express = require('express');
const { handlelogin, handleregister } = require('../controllers/handleauth');

const app = express();

const login = app.post("/auth/login", handlelogin);
const register = app.post("/auth/register", handleregister);

module.exports = {
    login,
    register
}