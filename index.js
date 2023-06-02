const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { get, GetAllUser } = require("./routes/routeuser");
const { login, register } = require("./routes/routeauth");

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

app.use(get, GetAllUser);
app.use(login, register);

app.listen(port, '0.0.0.0', function() {
    console.log(`Your application is running on the port ${port}`);
})