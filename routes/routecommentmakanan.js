const express = require('express');
const { handleCommentMakananAll, handleCommentMakananById, handleCreateCommentMakanan, handleUpdateCommentMakanan, handleDeleteComentMakananById, handleDeleteAllCommentMakanan } = require('../controllers/handleComment_makanan');

const app = express();

const getallcommentmakanan = app.get("/makanan/:id/comment", handleCommentMakananAll);
const getidcommentmakanan = app.get("/makanan/:id/comment/:id", handleCommentMakananById);
const createcommentmakanan = app.post("/makanan/:id/comment", handleCreateCommentMakanan);
const updatecommentmakanan = app.put("/makanan/:id/comment/:id", handleUpdateCommentMakanan);
const deletecommentmakananid = app.delete("/makanan/:id/comment/:id", handleDeleteComentMakananById);
const deleteallcommentmakanan = app.delete("/makanan/:id/comment", handleDeleteAllCommentMakanan);

module.exports = {
    getallcommentmakanan,
    getidcommentmakanan,
    createcommentmakanan,
    deleteallcommentmakanan,
    deletecommentmakananid,
    updatecommentmakanan
}
