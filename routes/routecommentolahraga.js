const express = require('express');
const { handleCommentOlahragaAll, handleCommentOlahragaById, handleCreateCommentOlahraga, handleDeleteCommentOlahragaById } = require('../controllers/handleComment_olahraga');


const app = express();

const getallcommentolahraga = app.get("/comment_olahraga", handleCommentOlahragaAll);
const getidcommentolahraga = app.get("/comment_olahraga/:id", handleCommentOlahragaById);
const createcommentolahraga = app.post("/comment_olahraga", handleCreateCommentOlahraga);
const deletecommentolahraga = app.delete("/comment_olahraga/:id", handleDeleteCommentOlahragaById);

module.exports = {
    getallcommentolahraga,
    getidcommentolahraga,
    createcommentolahraga,
    deletecommentolahraga
}