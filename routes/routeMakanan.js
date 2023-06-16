const express =  require('express');
const { handleMakananGetAll,
     handleMakananGetById, 
    handleCreateMakanan, 
    handleDeleteMakanan, 
    handleUpdateMakanan,
} = require('../controllers/handleMakanan');
const { auth, admin } = require('../middleware/auth');

const app = express();

const getallmakanan = app.get("/makanan", handleMakananGetAll);
const getidmakanan = app.get("/makanan/:id",  handleMakananGetById);
const createmakanan = app.post("/makanan", auth, handleCreateMakanan);
const deletemakanan = app.delete("/makanan/:id", auth, handleDeleteMakanan);
const updatemakanan = app.put("/makanan/:id", auth, admin, handleUpdateMakanan);

module.exports = {
    getallmakanan,
    getidmakanan,
    createmakanan,
    deletemakanan,
    updatemakanan,
}