const express = require('express');
const { 
  handleolhragaall, 
  handleolhragaid, 
  handlecreateolhraga, 
  handledeletolahraga, 
  handleupdateolahraga 
} = require('../controllers/handleolahraga');

const {  admin, auth } = require('../middleware/auth');


const app = express();

const getallolahraga = app.get("/olahraga",  handleolhragaall);

const getidolahraga = app.get("/olahraga/:id", auth, handleolhragaid);

const createolahraga = app.post("/olahraga", handlecreateolhraga);

const updateolahraga = app.put("/olahraga/:id", handleupdateolahraga);

const deleteolahraga = app.delete("/olahraga/:id", auth, admin, handledeletolahraga);

module.exports = {
  getallolahraga,
  getidolahraga,
  createolahraga,
  updateolahraga,
  deleteolahraga
}