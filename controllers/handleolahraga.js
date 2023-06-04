
const { Olahraga } = require("../db/models");
const { cloudinaryconf } = require("./confcloudinary");
const cloudinary = require('cloudinary').v2;
require("dotenv").config;

const { created, ok, notfound, servererror } = require("./statuscode");

// Configuration 
cloudinaryconf();

const handleolhragaall = async (req, res) => {
   try {
        const olahraga = await Olahraga.findAll();
        const response = {
                    status: "SUCCESS",
                    message: "Get All sport",
                    meta: {
                        total: olahraga.length
                    },
                    data: olahraga,
        };

        res.status(ok).json(response);
        return;
   } catch (error) {
        res.status(servererror).json({
            message : error.message
        });
   };
};

const handleolhragaid = async (req, res) => {
    try {
        const  uuid  = req.params.id;

        const olahraga = await Olahraga.findOne({
            where :{
                uuid : uuid
            }
        });
        
        if(!olahraga){
            res.status(notfound);
            res.json({
                message: "sport not Found"
            });

            return;
        }

        let response = {
            status: "SUCCESS",
            message: "Get Detail sport",
            data: olahraga
        }

        res.status(ok).json(response);
        return;
    } catch (error) {
        res.status(servererror).json({
            message : error.message
        });
    };
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
        };

        res.status(created).json(response);
    } catch (error) {
        response ={
            status : "ERROR",
            message : error.message
        }
        res.status(servererror).json(response);
    };
}

const handleupdateolahraga = async(req, res) =>{
    const uuid = req.params.id;
    try {
        
    } catch (error) {
        
    };
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
            return res.status(notfound).json({ 
                error: 'Sport not found' 
            });
        }
    } catch (error) {
        res.status(servererror).json({ 
            error: error.message });
    };
}

module.exports = {
    handleolhragaall,
    handleolhragaid,
    handlecreateolhraga,
    handledeletolahraga
}
