
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
            meta : {
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
        return;
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
            data: olahraga
        }

        res.status(ok).json(response);
        return;
    } catch (error) {
        res.status(servererror).json({
            message : error.message
        });
        return;
    };
};

const handlecreateolhraga = async (req, res) =>{
    const body = req.body;

    const kategori = 'olahraga';
    
    try {
        const _base64 = Buffer.from(req.files.img.data, 'base64').toString('base64');
        const base64 = `data:image/jpeg;base64,${_base64}`;
        
        const cloudinaryResponse = await cloudinary.uploader.upload(base64,{folder: "edukasi/olahraga", public_id: new Date().getTime() });

        const imgolahraga = cloudinaryResponse.secure_url;
        
        const createolahraga = await Olahraga.create({
            judul : body.judul,
            deskripsi_singkat : body.deskripsi_singkat,
            deskripsi_lengkap :body.deskripsi_lengkap,
            tips : body.tips,
            img : imgolahraga,
            jumlah_kalori: body.jumlah_kalori,
            level : body.level,
            kategori : kategori
        });

        response = {
            status : "Success",
            message : "Create Sport",
            data : createolahraga,
        };

        return res.status(created).json(response);
    } catch (error) {
        response ={
            status : "ERROR",
            message : error.message
        }
        return res.status(servererror).json(response);
    };
}

const handleupdateolahraga = async(req, res) =>{
   
    try {
        const uuid = req.params.id;
        const body = req.body;

        const olahraga = await Olahraga.findOne({
            where: {
                uuid : uuid
            }
        });

        if(!olahraga){
            return res.status(notfound).json({
                message : "Sport not found"
            });
        }

        const imgPublicIdSplit = olahraga.img.split('/');

        const imgPublicId = imgPublicIdSplit[imgPublicIdSplit.length - 1];
        const publicId = imgPublicId.split('.')[0];
        const updateid = `edukasi/olahraga/${publicId}`;
      
        const _base64 = Buffer.from(req.files.img.data, 'base64').toString('base64');
        const base64 = `data:image/jpeg;base64,${_base64}`;
        
        const cloudinaryResponse = await cloudinary.uploader.upload(base64,{ public_id: updateid, overwrite: true });

        const updateimgolahraga = cloudinaryResponse.secure_url;

        // fetch a request body
        const judul = body.judul;
        const deskripsi_singkat = body.deskripsi_singkat;
        const deskripsi_lengkap = body.deskripsi_lengkap;
        const tips = body.tips;
        const imgolahraga =  updateimgolahraga;
        const jumlah_kalori= body.jumlah_kalori;
        const level = body.level;
    
        const updateolahraga = await Olahraga.update({
            judul : judul,
            deskripsi_singkat : deskripsi_singkat,
            deskripsi_lengkap :deskripsi_lengkap,
            tips : tips,
            img : imgolahraga,
            jumlah_kalori: jumlah_kalori,
            level : level,
        },{
            where: {
                uuid : uuid
            }
        });

        if(updateolahraga){
            response = {
                status: "Success",
                message : "Update Sport Success",
            }
            return res.status(created).json(response);
        }
    } catch (error) {
        return res.status(servererror).json({ 
            error: error.message });
    };
}

const handledeletolahraga = async (req,res) =>{
    const uuid = req.params.id;
    
    try {
        const fordeleteolahraga = await Olahraga.findOne({
            where: { uuid : uuid }
        });
        const deleteolahraga = await Olahraga.destroy({
            where: { uuid: uuid},
        });
        if(!fordeleteolahraga){
            return res.status(notfound).json({
                error: 'Olahraga Not Found'
            })
        }
        const imgPublicIdSplit = fordeleteolahraga.img.split('/');

        const imgPublicId = imgPublicIdSplit[imgPublicIdSplit.length - 1];
        const publicId = imgPublicId.split('.')[0];
        
        // delete img olahraga from cloudinary
        const hapusimg = await cloudinary.uploader.destroy(`edukasi/olahraga/${publicId}`,  {folder: `edukasi/olahraga/${publicId}`});
        if(deleteolahraga){
            return res.status(ok).json({
                message : "Sport Has Been Delete",
                img : hapusimg
            });
        }
    } catch (error) {
       return res.status(servererror).json({ 
            error: error.message });
    };
}

module.exports = {
    handleolhragaall,
    handleolhragaid,
    handlecreateolhraga,
    handleupdateolahraga,
    handledeletolahraga
}
