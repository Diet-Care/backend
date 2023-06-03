const { Users } = require("../db/models");
require("dotenv").config;

const { created, ok, notfound, } = require("./statuscode");
const { servererror } = require("./statuscode");


const handleuserall = async (req, res) => {

    const users = await Users.findAll();
    const response = {
                status: "SUCCESS",
                message: "Get All Users",
                meta: {
                    total: users.length
                },
                data: users
        }

    res.status(created).json(response)
    return
};

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
    console.error(error);
    return res.status(servererror).json({ error: 'Server error' });
    }
}

module.exports = {
    handleuserall,
    handleuserdelete
}