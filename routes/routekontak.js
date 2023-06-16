const express = require('express');
const { handleKontakAll, handleKontakById, hanldeCreateKontak, handleUpdateKontak, handleDeleteAllKontak, handleDeleteKontakById } = require('../controllers/handleKontak');
const { auth, admin } = require('../middleware/auth');

const app = express();


const getallmessage = app.get("/kontak",  auth, admin, handleKontakAll);
const getmessagebyid = app.get("/kontak/:id", auth, admin, handleKontakById);
const createmessage = app.post("/kontak",  hanldeCreateKontak);
const updatemessage = app.put("/kontak/:id", handleUpdateKontak);

const deleteallmessage = app.delete("/kontak", auth, admin, handleDeleteAllKontak);
const deletemessagebyid = app.delete("/kontak/:id", auth, admin, handleDeleteKontakById);

module.exports = {
    getallmessage,
    getmessagebyid,
    createmessage,
    updatemessage,
    deleteallmessage,
    deletemessagebyid
}