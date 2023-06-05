const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const upload = require('express-fileupload');

// tableuser
const { get, GetAllUser, DeleteUser } = require("./routes/routeuser");

const { register, login } = require("./routes/routeauth");

const { getallolahraga, getidolahraga, createolahraga, deleteolahraga } = require("./routes/routeolahraga");

const { getallmakanan, getidmakanan, createmakanan, deletemakanan } = require("./routes/routeMakanan.js");

const { getallcommentolahraga, getidcommentolahraga, createcommentolahraga, deletecommentolahraga } = require("./routes/routecommentolahraga");


dotenv.config();

const app = express();
const port = process.env.PORT || 4000;
app.use(upload());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cors());


app.use(get, GetAllUser, DeleteUser);

app.use(register, login);

app.use(getallolahraga, getidolahraga, createolahraga, deleteolahraga);

app.use(getallmakanan, getidmakanan, createmakanan, deletemakanan);

app.use(getallcommentolahraga, getidcommentolahraga, createcommentolahraga, deletecommentolahraga);

app.listen(port, '0.0.0.0', function() {
    console.log(`Your application is running on the port ${port}`);
})