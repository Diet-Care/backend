const { Users } = require("../db/models");
require("dotenv").config;

const { created, ok, notfound, } = require("./statuscode");
const { servererror } = require("./statuscode");


const handleuserall = async (req, res) => {
    try {
        const users = await Users.findAll();
        const response = {
                    data: users,
            }

        res.status(ok).json(response)
        return
    } catch (error) {
        res.status(servererror).json({
            message : error.message
        });
        return;
    }
   
};

const handleUserId = async(req,res) =>{
    try {
        const uuid = req.params.id;

        const User = await Users.findOne({
            where: {
                uuid : uuid
            },
            attributes : ['name', 'email', 'gender', 'umur',  'alamat', 'img_profile', 'profesi', ]
        });

        if(!User) {
             res.status(notfound);
            res.json({ 
                message : "User Not Found" });
            
            return;
        }
        let response = {
            data : User
        }
        res.status(ok).json(response);
    } catch (error) {
        res.status(servererror).json({
            message : error.message
        });
        return;
    }
    
}

const handleUpdateuser= async(req, res) =>{
    const uuid = req.params.id;
    const body = req.body;

    try {
        const user = await Users.findOne({
            where: {
                uuid : uuid
            }
        });

        if(!user){
            return res.status(notfound).json({
                message : "User Not Found"
            })
        }
    
        const name = body.name;
        const gender = body.gender;
        const umur = body.umur;
        const geografis = body.geografis;
        const profesi = body.profesi;
        const alamat = body.alamat;
        // const img_profile = body.img_profile;
        
        const updateUser = await Users.update({
            name : name,
            gender : gender,
            umur : umur,
            geografis : geografis,
            profesi : profesi,
            alamat : alamat
        },
        {
            where : {
                uuid : uuid
            }
        });

        if(updateUser){
            let response = {
                status : "Sucess",
                message : "Sucess Update User"
            }
            return res.status(created).json(response);
        }
    } catch (error) {
        return res.status(servererror).json({
            error: error.message
        });
    }
    
}

const handleuserdelete = async(req,res) =>{   
    const  uuid  = req.params.id;

    try {
    const deleteuser = await Users.destroy({
        where: { uuid: uuid },
    });

    if (deleteuser) {
        return res.status(ok).json({
            message : "Success User Delete"
        });
    } else {
        return res.status(notfound).json({ error: 'User not found' });
    }
    } catch (error) {
    return res.status(servererror).json({ error: 'Server error' });
    }
}

module.exports = {
    handleuserall,
    handleUserId,
    handleUpdateuser,
    handleuserdelete
}