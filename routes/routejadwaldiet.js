const express = require('express');
const { handleScheduleAll, handleScheduleById, handleCreateSchedule, handleUpdateSchedule, handleDeleteScheduleById, handleDeleteAllSchedule } = require('../controllers/handleJadwalDiet');
const { auth } = require('../middleware/auth');

const app = express();

const getAllSchedule = app.get("/jadwaldiet",  handleScheduleAll);
const getScheduleById = app.get("/jadwaldiet/:id",  handleScheduleById);
const createSchedule = app.post("/jadwaldiet",  handleCreateSchedule);
const updateSchedule = app.put("/jadwaldiet/:id",  handleUpdateSchedule);
const deleteScheduleById = app.delete("/jadwaldiet/:id",  handleDeleteScheduleById);
const deleteAllSchedule = app.delete("/jadwaldiet",  handleDeleteAllSchedule);

module.exports = {
    getAllSchedule,
    getScheduleById,
    createSchedule,
    updateSchedule,
    deleteScheduleById,
    deleteAllSchedule
}