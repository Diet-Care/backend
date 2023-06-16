const express = require('express');
const { handleCommentOlahragaAll, handleCommentOlahragaById, handleCreateCommentOlahraga, handleDeleteCommentOlahragaById, handleUpdateCommentOlahraga, handleDeleteAllCommentOlahraga } = require('../controllers/handleComment_olahraga');
const { auth, admin } = require('../middleware/auth');


const app = express();

const getallcommentolahraga = app.get("/olahraga/:id/comment", auth, handleCommentOlahragaAll);
const getidcommentolahraga = app.get("/olahraga/:id/comment/:id", auth, handleCommentOlahragaById);
const createcommentolahraga = app.post("/olahraga/:id/comment", auth, handleCreateCommentOlahraga);
const deletecommentolahraga = app.delete("/olahraga/:id/comment/:id", auth, handleDeleteCommentOlahragaById);
const updatecommentolahraga = app.put("/olahraga/:id/comment/:id", auth, handleUpdateCommentOlahraga);
const deleteallcommentolahraga = app.delete("/olahraga/:id/comment", auth, admin, handleDeleteAllCommentOlahraga);

module.exports = {
    getallcommentolahraga,
    getidcommentolahraga,
    createcommentolahraga,
    deletecommentolahraga,
    updatecommentolahraga,
    deleteallcommentolahraga
}