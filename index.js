const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { get, GetAllUser, DeleteUser } = require("./routes/routeuser");
const { register, login } = require("./routes/routeauth");

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());


app.use(get, GetAllUser, DeleteUser);

app.use(register, login);

app.listen(port, '0.0.0.0', function() {
    console.log(`Your application is running on the port ${port}`);
})