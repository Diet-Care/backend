const express =  require('express');
const { handleMakananGetAll,
     handleMakananGetById, 
    handleCreateMakanan, 
    handleDeleteMakanan, 
    handleUpdateMakanan,
} = require('../controllers/handleMakanan');

const app = express();

const getallmakanan = app.get("/makanan", handleMakananGetAll);
const getidmakanan = app.get("/makanan/:id", handleMakananGetById);
const createmakanan = app.post("/makanan", handleCreateMakanan);
const deletemakanan = app.delete("/makanan/:id", handleDeleteMakanan);
const updatemakanan = app.put("/makanan/:id", handleUpdateMakanan);

module.exports = {
    getallmakanan,
    getidmakanan,
    createmakanan,
    deletemakanan,
    updatemakanan,
}