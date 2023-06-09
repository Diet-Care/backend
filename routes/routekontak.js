const express = require('express');
const { Authorization } = require('../middleware/authorization');
const { handleKontakAll, handleKontakById, hanldeCreateKontak, handleUpdateKontak, handleDeleteAllKontak, handleDeleteKontakById } = require('../controllers/handleKontak');

const app = express();

const getallmessage = app.get("/kontak", Authorization, handleKontakAll);
const getmessagebyid = app.get("/kontak/:id", Authorization, handleKontakById);
const createmessage = app.post("/kontak", Authorization, hanldeCreateKontak);
const updatemessage = app.put("/kontak/:id", Authorization, handleUpdateKontak);
const deleteallmessage = app.delete("/kontak", Authorization, handleDeleteAllKontak);
const deletemessagebyid = app.delete("/kontak/:id", Authorization, handleDeleteKontakById);

module.exports = {
    getallmessage,
    getmessagebyid,
    createmessage,
    updatemessage,
    deleteallmessage,
    deletemessagebyid
}