const jwt = require('jsonwebtoken');
const { unauthorized, notfound, forbiden } = require('../controllers/statuscode');
const {Users} = require('../db/models');
require('dotenv').config();

const auth = (req, res, next) =>{
    let response = {}
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if(token == null){
        response = {
            status : 'ERROR',
            message: "Authorization Failed"
        }
        res.status(unauthorized).json(response);
        return
    }

    jwt.verify(token, process.env.JWT_SECRET, (error, user) =>{
        if(error){
            response ={
                status : "ERROR",
                message : error
            }
            res.status(unauthorized).json(response)
            return
        }
        req.user = user
        next()
    })
}

const admin =  async(req, res, next) =>{
    const uuid = req.params.id;
    const user = await Users.findOne({
        where : {
            uuid : uuid
        }
    });
    if(!user){
        return res.status(notfound).json({
            message : "User Tidak ditemukan"
        });
    }
    if(user.role !== "admin"){
        return res.status(forbiden).json({
            message: "Akses Denied"
        })
    }
    next();
}

module.exports ={
    auth,
    admin
}
