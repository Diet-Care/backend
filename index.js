const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

app.listen(port, '0.0.0.0', function() {
    console.log(`Your application is running on the port ${port}`);
})