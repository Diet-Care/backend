const express =  require('express');
const { handleMakananGetAll, handleMakananGetById, handleCreateMakanan, handleDeleteMakanan } = require('../controllers/handleMakanan');

const app = express();

const getallmakanan = app.get("/makanan", handleMakananGetAll);
const getidmakanan = app.get("/makanan/:id", handleMakananGetById);
const createmakanan = app.post("/makanan", handleCreateMakanan);
const deletemakanan = app.delete("/makanan/:id", handleDeleteMakanan);

module.exports = {
    getallmakanan,
    getidmakanan,
    createmakanan,
    deletemakanan
}