require("dotenv").config;
// membuat hash passowrd
const bcrypt = require('bcryptjs');
const SALT = Number(process.env.PASSWORD_SALT);

const { Users } = require("../db/models");
const { bad, notfound, ok } = require("./statuscode");


const handlelogin = async(req, res) =>{
    const email = req.body.email;
    const password = req.body.password;

    const user = await Users.findOne({
        where: {
            email,
        }
    });

    if(!user){
        res.status(notfound);
        res.json({
            message: 'User not Found'
        });

        return;
    }

    if(!bcrypt.compareSync(password, user.password)){
        res.status(bad);
        res.json({
            message : "wrong password",
        });

        return;
    }
    res.status(ok);
    res.json({
        message : "successfuly",
        data : user
    });
}

const handleregister = async (req,res, next) =>{
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const role = 'admin';

    // mencari data user, jika email sama maka ditolak 
    const user = await Users.findOne({
        where:{
            email,
        }
    });

    if(user){
        res.status(bad);
        res.json({
            error: 'user already exist'
        });
        return;
    }

    const encryptedPassword = bcrypt.hashSync(password, SALT);

    const createuser = await Users.create({
        name,
        email,
        password : encryptedPassword,
        role : role
    });

    res.json({
        message : "successfuly",
        data : createuser
    });
}

module.exports = {
    handlelogin,
    handleregister
}