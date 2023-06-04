require("dotenv").config();
const { Makanan } = require("../db/models");
const { created, notfound, ok, bad, servererror } = require("./statuscode");

const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
});

const handleMakananGetAll = async function(req, res) {
    const makanan = await Makanan.findAll();
    const response = {
        status: "SUCCESS",
        message: "Get All Foods",
        meta: {
            total: makanan.length
        },
        data: makanan,
        img: cloudinary.url(new Date().getTime())
    }
    res.status(created).json(response)
    return
};

const handleMakananGetById = async function(req,res) {
    const uuid = req.params.id;

    const makanan = await Makanan.findAll({
        where:{
            uuid: uuid
        }
    });
    let response = {
        status: "SUCCESS",
        message: "Get Food Detail",
        data: makanan
    }
    if(!makanan){
        res.status(notfound);
        res.json({
            message: 'Foods not Found'
        });
    }
    res.statu(created).json(response)
    return
};

const handleCreateMakanan = async function(req, res) {
    const body = req.body;
    const kategori = 'makanan';

    try {
        const _base64 = Buffer.from(req.files.img_makanan.data, 'base64').toString('base64');
        const base64 = `data:image/jpeg;base64,${_base64}`;

        const cloudinary_Response = await cloudinary.uploader.upload(base64, 
            {folder: "edukasi/makanan", public_id: new Date().getTime()
        });

        const imgMakanan = cloudinary_Response.secure_url;

        const createMakanan = await Makanan.create({
            judul_makanan : body.judul_makanan,
            deskripsi_singkat: body.deskripsi_singkat,
            deskripsi_lengkap: body.deskripsi_lengkap,
            tips_makanan: body.tips_makanan,
            img_makanan: imgMakanan,
            jumlah_kalori: body.jumlah_kalori,
            level: body.level,
            kategori: kategori
        });
        console.log(createMakanan);
        response = {
            status: "SUCCESS",
            message: "Create Makanan",
            data: createMakanan,
            img: cloudinary_Response
        }
        res.status(ok).json(response);
    } catch (error){
        response = {
            status: "ERROR",
            message: error
        }
        res.status(servererror).json(response)
    } 
}

const handleDeleteMakanan = async function(req, res) {
    const uuid = req.params.id;

    try {
        const deletemakanan = await Makanan.destroy({
            where: {uuid: uuid},
        });
        if(deletemakanan){
            return res.status(ok).json({
                message: "FOOD HAS BEEN DELETED"
            });
        }else{
            return res.status(notfound).json({
                error: 'FOOD NOT FOUND'
            });
        }
    } catch (error) {
        console.error(error);
        return res.status(servererror).json({
            error: 'SERVER ERROR'
        });
    }
}

module.exports = {
    handleMakananGetAll,
    handleMakananGetById,
    handleCreateMakanan,
    handleDeleteMakanan
}