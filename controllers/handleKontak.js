const { Kontak } = require("../db/models");
const { ok, notfound, created, bad, servererror } = require("./statuscode");

require("dotenv").config;

const handleKontakAll = async (req,res) => {
    const kontak = await Kontak.findAll();
    const response = {
        status: "SUCCESS",
        message: "Get All Message",
        meta: {
            total: kontak.length
        },
        data: kontak,
    };
    res.status(ok).json(response)
    return
}

const handleKontakById = async (req, res) => {
    const uuid = req.params.id;
    const kontak = await Kontak.findOne({
        where: {
            uuid: uuid
        }
    });
    let response = {
        status: "SUCCESS",
        message: "Get Message Detail",
        data: kontak
    }
    if(!kontak){
        res.status(notfound);
        res.json({
            message: "Message Not Found"
        });
        return;
    }
    res.status(created).json(response)
    return
};

const hanldeCreateKontak = async(req, res) => {
    let response = {}
    try {
        const newMessage = await Kontak.create({
            name: req.body.name,
            email: req.body.email,
            pesan: req.body.pesan
        });
        response = {
            status: "SUCCESS",
            message: "Message Has Been Created",
            data: newMessage
        }
        return res.status(ok).json(response);
    }catch(error){
        response = {
            status: "ERROR",
            message: error.message
        }
        return res.status(bad).json(response)
    }
}

const handleUpdateKontak = async (req, res) => {
    try {
        const uuid = req.params.id;
        const body = req.body; 

        const kontak = await Kontak.findOne({
            where: {
                uuid: uuid
            }
        });

        if(!kontak){
            return res.status(notfound).json({
                message: "Message You Looking For Is Not Found"
            });
        }
        const name = body.name;
        const email = body.email;
        const pesan = body.pesan;

        const updatekontak = await Kontak.update({
            name: name,
            email: email,
            pesan: pesan,
        }, {
            where: {
                uuid: uuid
            }
        });

        if(updatekontak){
            response = {
                status: "SUCCESS",
                message: "Update Success",
            }
            return res.status(created).json(response);
        }
    } catch (error) {
        return res.status(servererror).json({
            error: error.message
        });
    };
}

const handleDeleteKontakById = async (req, res) => {
    const uuid = req.params.id;

    try {
        const deleteMessage = await Kontak.destroy({
            where: {
                uuid: uuid
            },
        });
        if(deleteMessage){
            return res.status(ok).json({
                message: "Message Has Been Deleted"
            });
        }else{
            return res.status(notfound).json({
                error: "Message Not Found"
            });
        }
    } catch (error){
        console.error(error);
        return res.status(servererror).json({
            error: "Server Error",
            message: error.message
        });
    }
}

const handleDeleteAllKontak = async (req, res) => {
    try {
        await Kontak.destroy({
            where: {},
            truncate: true,
        });
        return res.status(ok).send();
    }catch(error){
        return res.status(servererror).json({
            error: "Server Error",
            message: error.message
        });
    };
};

module.exports = {
    handleKontakAll,
    handleKontakById,
    hanldeCreateKontak,
    handleUpdateKontak,
    handleDeleteAllKontak,
    handleDeleteKontakById
}