const { Jadwal_diet, Users, Olahraga, Makanan } = require("../db/models");
const { ok, notfound, bad, created, servererror } = require("./statuscode");

require("dotenv").config;

const handleScheduleAll = async (req, res) => {
    try {
        const jadwal_diet = await Jadwal_diet.findAll({
            include: [
                {
                    model: Users,
                    as: 'users'
                },
                {
                    model: Olahraga,
                    as: 'olahraga'
                },
                {
                    model: Makanan,
                    as: 'makanan'
                }
            ]
        });
        const response = {
            data: jadwal_diet,
        }
        res.status(ok).json(response);
        return;
    } catch (error) {
        response = {
            status: "ERROR",
            message: error.message
        }
        return res.status(bad).json(response)
    }
};

const handleScheduleById =  async (req, res) => {
    try {
        const uuid = req.params.id;
        const jadwal_diet = await Jadwal_diet.findOne({
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
    } catch (error) {
        response = {
            status: "ERROR",
            message: error.message
        }
        return res.status(bad).json(response)
    }
};

const handleCreateSchedule = async(req, res)=>{
    let response = {}
    try {
        const newSchedule = await Jadwal_diet.create({
            uuid_user: req.body.uuid_user,
            uuid_olahraga: req.body.uuid_olahraga,
            uuid_makanan: req.body.uuid_makanan,
            level: req.body.level,
            tgl_mulai: new Date(req.body.tgl_mulai),
            tgl_selesai: new Date(req.body.tgl_selesai)
        });
        console.log(newSchedule);
        response = {
            status: "SUCCESS",
            message: "Schedule Has Been Created",
            data: newSchedule
        }
        return res.status(created).json(response);
    }catch(error){
        response = {
            status: "ERROR",
            message: error.message
        }
        return res.status(bad).json(response)
    }
}

const handleUpdateSchedule = async(req, res) => {

    let response = {};
    try {
        const uuid = req.params.id;

        const jadwal = await Jadwal_diet.findOne({
            where: {
                uuid: uuid
            }
        });

        if(!jadwal){
            return res.status(notfound).json({
                message: "Schedule You Looking For Is Not Found"
            });

        } else {
            const uuid_user = req.body.uuid_user
            const uuid_olahraga = req.body.uuid_olahraga
            const uuid_makanan = req.body.uuid_makanan
            const level = req.body.level
            const tgl_mulai = req.body.tgl_mulai
            const tgl_selesai = req.body.tgl_selesai
            
            const updatejadwal = await Jadwal_diet.update({
                uuid_user : uuid_user,
                uuid_olahraga : uuid_olahraga,
                uuid_makanan : uuid_makanan,
                level : level,
                tgl_mulai : tgl_mulai,
                tgl_selesai : tgl_selesai
            })
            
            if(updatejadwal){
                response = {
                    status: "SUCCESS",
                    message: "Update Success",
                }
                return res.status(created).json(response);
            }
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