const express =  require('express');
const { handleMakananGetAll,
     handleMakananGetById, 
    handleCreateMakanan, 
    handleDeleteMakanan, 
    handleUpdateMakanan,
     handleDeleteAllMakanan 
} = require('../controllers/handleMakanan');

const app = express();

const getallmakanan = app.get("/makanan", handleMakananGetAll);
const getidmakanan = app.get("/makanan/:id", handleMakananGetById);
const createmakanan = app.post("/makanan", handleCreateMakanan);
const deletemakanan = app.delete("/makanan/:id", handleDeleteMakanan);
const updatemakanan = app.put("/makanan/:id", handleUpdateMakanan);
const deleteallmakanan = app.delete("/makanan", handleDeleteAllMakanan);

module.exports = {
    getallmakanan,
    getidmakanan,
    createmakanan,
    deletemakanan,
    updatemakanan,
    deleteallmakanan
}