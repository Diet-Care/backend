const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const upload = require('express-fileupload');
// const session = require("express-session");
// const sequelizeStore = require("connect-session-sequelize")(
//     connect.session.Store
//   );;

// tableuser
const {  
    GetAllUser,
    getUserId , 
    DeleteUser, 
    updateuser, 
} = require("./routes/routeuser");

const { 
    register, 
    login, 
    changepassword, 
} = require("./routes/routeauth");

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

const { getallcommentmakanan, 
    getidcommentmakanan, 
    createcommentmakanan, 
    deleteallcommentmakanan, 
    deletecommentmakananid, 
    updatecommentmakanan 
} = require("./routes/routecommentmakanan");

const { getallmessage, 
    getmessagebyid, 
    createmessage, 
    updatemessage, 
    deleteallmessage, 
    deletemessagebyid 
} = require("./routes/routekontak");


const { getAllSchedule, 
    getScheduleById, 
    createSchedule, 
    updateSchedule, 
    deleteAllSchedule, 
    deleteScheduleById 
} = require("./routes/routejadwaldiet");

// const { development } = require("./sequelize.config");



const port = process.env.PORT || 3050;

dotenv.config();

const app = express();
// const sessionStore = sequelizeStore(session.Store);


// (async() => {
//     await development.sync();
// })();

// app.use(session({
//     secret: process.env.SECRET_KEY,
//     store: new sessionStore({
//         db: development,
// //         checkExpirationInterval: 15 * 60 * 1000, // The interval at which to cleanup expired sessions in milliseconds.
// //   expiration: 24 * 60 * 60 * 1000  // The maximum age (in milliseconds) of a valid session.  
//       }),
//     resave: false,
//     saveUninitialized: true,
//     cookie: { secure: true }
// }));

app.use(upload());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cors({
    credentials: true,
    origin: true
}));

// endpoint before
app.get("/", (req, res) => {
    res.send("hallo sir/miss, welcome you have successfully run this endpoint");
});

// user
app.use(GetAllUser,getUserId, DeleteUser, updateuser);

// authentikasi
app.use(register, login, changepassword);

// olahraga
app.use(getallolahraga, getidolahraga, createolahraga, updateolahraga, deleteolahraga);

// makanan
app.use(getallmakanan, getidmakanan, createmakanan, deletemakanan, updatemakanan, deleteallmakanan);

// comment olahraga
app.use(getallcommentolahraga, getidcommentolahraga, createcommentolahraga, deletecommentolahraga, updatecommentolahraga, deleteallcommentolahraga);

//comment makanan
app.use(getallcommentmakanan, getidcommentmakanan, createcommentmakanan, deleteallcommentmakanan, deletecommentmakananid, updatecommentmakanan);

// kontak
app.use(getallmessage, getmessagebyid, createmessage, updatemessage, deleteallmessage, deletemessagebyid);

// jadwal diet
app.use(getAllSchedule, getScheduleById, createSchedule, updateSchedule, deleteAllSchedule, deleteScheduleById)

app.listen(port, '0.0.0.0', function() {
    console.log(`Your application is running on the port ${port}`);
})
