const { Jadwal_diet, Users, Olahraga, Makanan } = require("../db/models");
const { ok, notfound, bad, created, servererror } = require("./statuscode");

require("dotenv").config;

const handleScheduleAll = async (req, res) => {
    const jadwal_diet = await Jadwal_diet.findAll({
        include: {
            model: Users,
            as: 'user'
        },
        include: {
            model: Olahraga,
            as: 'olahraga'
        },
        include: {
            model: Makanan,
            as: 'makanan'
        }
    });
    const response = {
        data: jadwal_diet,
    }
    res.status(ok).json(response);
    return;
};

const handleScheduleById =  async (req, res) => {
    const uuid = req.params.id;
    const jadwal_diet = await Jadwal_diet.findAll({
        where: {
            uuid: uuid
        }
    });
    let response = {
        data: jadwal_diet
    }
    if(!jadwal_diet){
        res.status(notfound);
        res.json({
            message: "Schedule Not Found"
        });
        return;
    }
    res.status(ok).json(response);
    return;
};

const handleCreateSchedule = async(req, res)=>{
    let response = {}
    try {
        const newSchedule = await Jadwal_diet.create({
            uuid_user: req.body.id,
            uuid_olahraga: req.body.id,
            uuid_makanan: req.body.id,
            level: req.body.level,
            tgl_mulai: req.body.tgl_mulai,
            tgl_selesai: req.body.tgl_selesai
        });
        response = {
            status: "SUCCESS",
            message: "Schedule Was Created",
            data: newSchedule
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

const handleUpdateSchedule = async(req, res) => {
    let response = {}
    const jadwal_diet = Jadwal_diet.findOne({
        where: {
            uuid: req.params.id
        }
    });
    if(!jadwal_diet){
        response = {
            status: "SUCCESS",
            message: "Schedule Not Found"
        }
        return res.status(notfound).json({
            message : "jadwal_diet Not Found"
        })
    }else{
        jadwal_diet.uuid_user = req.body.uuid_user
        jadwal_diet.uuid_olahraga = req.body.uuid_olahraga
        jadwal_diet.uuid_makanan = req.body.uuid_makanan
        jadwal_diet.level = req.body.level
        jadwal_diet.tgl_mulai = req.body.tgl_mulai
        jadwal_diet.tgl_selesai = req.body.tgl_selesai
        jadwal_diet.save()
        response = {
            status: "SUCCESS",
            message: "Schedule Updated",
            data: jadwal_diet
        }
    }
    res.status(created).json(response)
    return
}

const handleDeleteScheduleById = async(req, res) => {
    const uuid = req.params.id;
    try {
        const jadwal_diet = await Jadwal_diet.destroy({
            where: {
                uuid: uuid
            },
        });
        if(jadwal_diet){
            return res.status(ok).json({
                message: "Schedule Deleted"
            });
        }else{
            return res.status(notfound).json({
                error: "Schedule Not Found"
            });
        }
    }catch(error){
        console.error(error);
        return res.status(servererror).json({
            error: "Server Error",
            message: error.message
        });
    }
}

const handleDeleteAllSchedule = async(req,res)=>{
    try {
        await Jadwal_diet.destroy({
            where: {},
            truncate: true,
        });
        return res.status(ok).send();
    } catch (error) {
        return res.status(servererror).json({
            error: "Server Error",
            message: error.message
        });
    }
};

module.exports = {
    handleCreateSchedule,
    handleUpdateSchedule,
    handleScheduleAll,
    handleScheduleById,
    handleDeleteAllSchedule,
    handleDeleteScheduleById
}