const express = require('express');
const { handleCommentMakananAll, handleCommentMakananById, handleCreateCommentMakanan, handleUpdateCommentMakanan, handleDeleteComentMakananById, handleDeleteAllCommentMakanan } = require('../controllers/handleComment_makanan');
const { admin, auth } = require('../middleware/auth');

const app = express();

const getallcommentmakanan = app.get("/makanan/:id/comment", auth, handleCommentMakananAll);
const getidcommentmakanan = app.get("/makanan/:id/comment/:id", auth, handleCommentMakananById);
const createcommentmakanan = app.post("/makanan/:id/comment", auth, handleCreateCommentMakanan);
const updatecommentmakanan = app.put("/makanan/:id/comment/:id", auth, handleUpdateCommentMakanan);
const deletecommentmakananid = app.delete("/makanan/:id/comment/:id", auth,handleDeleteComentMakananById);
const deleteallcommentmakanan = app.delete("/makanan/:id/comment", auth, admin, handleDeleteAllCommentMakanan);

module.exports = {
    getallcommentmakanan,
    getidcommentmakanan,
    createcommentmakanan,
    deleteallcommentmakanan,
    deletecommentmakananid,
    updatecommentmakanan
}
