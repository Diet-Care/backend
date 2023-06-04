
const { Olahraga } = require("../db/models");
const { cloudinaryconf } = require("./confcloudinary");
const cloudinary = require('cloudinary').v2;
require("dotenv").config;

const { created, ok, notfound, bad, servererror } = require("./statuscode");

// Configuration 
cloudinaryconf();

const handleolhragaall = async (req, res) => {
   
    const olahraga = await Olahraga.findAll();
    const response = {
                status: "SUCCESS",
                message: "Get All sport",
                meta: {
                    total: olahraga.length
                },
                data: olahraga,
        }

    res.status(created).json(response)
    return
};

const handleolhragaid = async (req, res) => {
    const  uuid  = req.params.id;

    const olahraga = await Olahraga.findAll({
        where :{
            uuid : uuid
        }
    });
   let response = {
            status: "SUCCESS",
            message: "Get Detail sport",
            data: olahraga
   }
   if(!olahraga){
    res.status(notfound);
    res.json({
        message: 'sport not Found'
    });
    }
    res.status(created).json(response)
    return
};

const handlecreateolhraga = async (req, res) =>{
    const body = req.body;

    const kategori = 'olahraga';
    
    try {

        const _base64 = Buffer.from(req.files.img_olahraga.data, 'base64').toString('base64');
        const base64 = `data:image/jpeg;base64,${_base64}`;
        
        const cloudinaryResponse = await cloudinary.uploader.upload(base64,{folder: "edukasi/olahraga", public_id: new Date().getTime() });

        const imgolahraga = cloudinaryResponse.secure_url;
        
        const createolahraga = await Olahraga.create({
            judul_olahraga : body.judul_olahraga,
            deskripsi_singkat : body.deskripsi_singkat,
            deskripsi_lengkap :body.deskripsi_lengkap,
            tips_olahraga : body.tips_olahraga,
            img_olahraga : imgolahraga,
            jumlah_kalori: body.jumlah_kalori,
            level : body.level,
            kategori : kategori
        });

        response = {
            status : "Success",
            message : "Create Sport",
            data : createolahraga,
        }
        res.status(ok).json(response);
    } catch (error) {
        response ={
            status : "ERROR",
            message : error
        }
        res.status(bad).json(response);
    }
}

const handledeletolahraga = async (req,res) =>{
    const uuid = req.params.id;
    try {

        const deleteolahraga = await Olahraga.destroy({
            where: { uuid: uuid},
        });
        if(deleteolahraga){
            return res.status(ok).json({
                message : "Sport Has Been Delete"
            });
        }else{
            return res.status(notfound).json({ error: 'Sport not found' });
        }
    } catch (error) {
        console.error(error);
        return res.status(servererror).json({ error: 'Server error' });
    }   
}

module.exports = {
    handleolhragaall,
    handleolhragaid,
    handlecreateolhraga,
    handledeletolahraga
}
