const express = require('express');
const { handleCommentOlahragaAll, handleCommentOlahragaById, handleCreateCommentOlahraga, handleDeleteCommentOlahragaById } = require('../controllers/handleComment_olahraga');


const app = express();

const getallcommentolahraga = app.get("/olahraga/:id/comment", handleCommentOlahragaAll);
const getidcommentolahraga = app.get("/olahraga/:id/comment/:id", handleCommentOlahragaById);
const createcommentolahraga = app.post("/olahraga/:id/comment", handleCreateCommentOlahraga);
const deletecommentolahraga = app.delete("/olahraga/:id/comment/:id", handleDeleteCommentOlahragaById);

module.exports = {
    getallcommentolahraga,
    getidcommentolahraga,
    createcommentolahraga,
    deletecommentolahraga
}