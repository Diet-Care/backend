const jwt = require('jsonwebtoken');
const { unauthorized } = require('../controllers/statuscode');
require('dotenv').config();

const Authorization = (req, res, next) =>{
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

module.exports ={
    Authorization
}
