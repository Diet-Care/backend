
const { Olahraga } = require("../db/models");
const upload = require('express-fileupload');
const cloudinary = require('cloudinary').v2;
require("dotenv").config;

const { created, ok, notfound, bad, servererror } = require("./statuscode");

// Configuration 
cloudinary.config({
    cloud_name: "duw2tc97f",
    api_key: "811241231541154",
    api_secret: "lQwRWEncb0KgAW__4FqsjC97smE"
  });

const handleolhragaall = async (req, res) => {
   
    const olahraga = await Olahraga.findAll();
    const response = {
                status: "SUCCESS",
                message: "Get All Olahraga",
                meta: {
                    total: olahraga.length
                },
                data: olahraga,
                img : cloudinary.url("olympic_flag")
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
            message: "Get Detail olahraga",
            data: olahraga
   }
   if(!olahraga){
    res.status(notfound);
    res.json({
        message: 'User not Found'
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

        
        const imgolahraga = req.body.img_olahraga;

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

        const cloudinaryResponse = await cloudinary.uploader.upload(imgolahraga, { public_id: "olympic_flag" });

        const img_olahraga = img_olahraga;
        console.log(createolahraga);
        response = {
            status : "Success",
            message : "Create Olahraga",
            data : createolahraga,
            img: cloudinaryResponse,

        }

        res.status(ok).json(response);
    } catch (error) {
        response ={
            status : "ERROR",
            message : error
        }
          
        res.status(servererror).json(response)
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
                message : "Success data Olahraga Delete"
            });
        }else{
            return res.status(notfound).json({ error: 'Data Olahraga not found' });
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
