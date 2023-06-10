const express = require('express');
const { handleScheduleAll, handleScheduleById, handleCreateSchedule, handleUpdateSchedule, handleDeleteScheduleById, handleDeleteAllSchedule } = require('../controllers/handleJadwalDiet');
const { auth } = require('../middleware/auth');

const app = express();

const getAllSchedule = app.get("/jadwaldiet", auth, handleScheduleAll);
const getScheduleById = app.get("/jadwaldiet/:id", auth, handleScheduleById);
const createSchedule = app.post("jadwaldiet", auth, handleCreateSchedule);
const updateSchedule = app.put("jadwaldiet/:id", auth, handleUpdateSchedule);
const deleteScheduleById = app.delete("jadwaldiet/:id", auth, handleDeleteScheduleById);
const deleteAllSchedule = app.delete("jadwaldiet", auth, handleDeleteAllSchedule);

module.exports = {
    getAllSchedule,
    getScheduleById,
    createSchedule,
    updateSchedule,
    deleteScheduleById,
    deleteAllSchedule
}