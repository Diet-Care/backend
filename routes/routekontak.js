const express = require('express');
const { handleKontakAll, handleKontakById, hanldeCreateKontak, handleUpdateKontak, handleDeleteAllKontak, handleDeleteKontakById } = require('../controllers/handleKontak');
const { auth } = require('../middleware/auth');

const app = express();


const getallmessage = app.get("/kontak",  handleKontakAll);
const getmessagebyid = app.get("/kontak/:id",  handleKontakById);
const createmessage = app.post("/kontak",  hanldeCreateKontak);
const updatemessage = app.put("/kontak/:id", auth, handleUpdateKontak);

const deleteallmessage = app.delete("/kontak", auth, handleDeleteAllKontak);
const deletemessagebyid = app.delete("/kontak/:id", auth, handleDeleteKontakById);

module.exports = {
    getallmessage,
    getmessagebyid,
    createmessage,
    updatemessage,
    deleteallmessage,
    deletemessagebyid
}