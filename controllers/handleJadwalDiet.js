const { CHAR, UUID } = require("sequelize");
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
            uuid_user: UUID(req.body.uuid_user),
            uuid_olahraga: UUID(req.body.uuid_olahraga),
            uuid_makanan: UUID(req.body.uuid_makanan),
            level: req.body.level,
            tgl_mulai: req.body.tgl_mulai,
            tgl_selesai: req.body.tgl_selesai
        });
        response = {
            status: "SUCCESS",
            message: "Schedule Has Been Created",
            data: newSchedule
        }
        return res.status(ok).json(response);
    }catch(error){
        response = {
            status: "ERROR",
            message: error.parent.sqlMessage
        }
        return res.status(bad).json(response)
    }
}

const handleUpdateSchedule = async(req, res) => {
    try {
        const uuid = req.params.id;
        const body = req.body; 

        const jadwal = await Jadwal_diet.findOne({
            where: {
                uuid: uuid
            }
        });

        if(!jadwal_diet){
            return res.status(notfound).json({
                message: "Schedule You Looking For Is Not Found"
            });
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

        const uuid_user = body.uuid_user;
        const uuid_olahraga = body.uuid_olahraga;
        const uuid_makanan = body.uuid_makanan;
        const level = body.level;
        const tgl_mulai = body.tgl_mulai;
        const tgl_selesai = body.tgl_selesai;

        const updatejadwal = await Kontak.update({
            uuid_user: uuid_user,
            uuid_olahraga: uuid_olahraga,
            uuid_makanan: uuid_makanan,
            level: level,
            tgl_mulai: tgl_mulai,
            tgl_selesai: tgl_selesai
        }, {
            where: {
                uuid: uuid
            }
        });

        if(updatejadwal){
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