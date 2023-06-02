const express = require('express');
const { handleolhragaall, handleolhragaid, handlecreateolhraga, handledeletolahraga } = require('../controllers/handleolahraga');


const app = express();

const getallolahraga = app.get("/olahraga", handleolhragaall);

const getidolahraga = app.get("/olahraga/:id", handleolhragaid);

const createolahraga = app.post("/olahraga", handlecreateolhraga);

const deleteolahraga = app.delete("/olahraga/:id", handledeletolahraga);

module.exports = {
  getallolahraga,
  getidolahraga,
  createolahraga,
  deleteolahraga
}