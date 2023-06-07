const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const upload = require('express-fileupload');

// tableuser
const { get, GetAllUser, DeleteUser, updateuser } = require("./routes/routeuser");

const { register, login } = require("./routes/routeauth");

const { getallolahraga, 
    getidolahraga, 
    createolahraga, 
    updateolahraga,
    deleteolahraga 
} = require("./routes/routeolahraga");

const { getallmakanan, 
    getidmakanan, 
    createmakanan, 
    deletemakanan, 
    updatemakanan, 
    deleteallmakanan 
} = require("./routes/routeMakanan.js");

const { getallcommentolahraga, 
    getidcommentolahraga, 
    createcommentolahraga, 
    deletecommentolahraga, 
    updatecommentolahraga, 
    deleteallcommentolahraga 
} = require("./routes/routecommentolahraga");


dotenv.config();

const app = express();
const port = process.env.PORT || 4000;
app.use(upload());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cors());

// user
app.use(get, GetAllUser, DeleteUser, updateuser);

// authentikasi
app.use(register, login);

// olahraga
app.use(getallolahraga, getidolahraga, createolahraga, updateolahraga, deleteolahraga);

// makanan
app.use(getallmakanan, getidmakanan, createmakanan, deletemakanan, updatemakanan, deleteallmakanan);

// comment olahraga
app.use(getallcommentolahraga, getidcommentolahraga, createcommentolahraga, deletecommentolahraga, updatecommentolahraga, deleteallcommentolahraga);

app.listen(port, '0.0.0.0', function() {
    console.log(`Your application is running on the port ${port}`);
})