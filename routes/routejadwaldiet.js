const express = require('express');
const { Authorization } = require('../middleware/authorization');
const { handleScheduleAll, handleScheduleById, handleCreateSchedule, handleUpdateSchedule, handleDeleteScheduleById, handleDeleteAllSchedule } = require('../controllers/handleJadwalDiet');

const app = express();

const getAllSchedule = app.get("/jadwaldiet", Authorization, handleScheduleAll);
const getScheduleById = app.get("/jadwaldiet/:id", Authorization, handleScheduleById);
const createSchedule = app.post("jadwaldiet", Authorization, handleCreateSchedule);
const updateSchedule = app.put("jadwaldiet", Authorization, handleUpdateSchedule);
const deleteScheduleById = app.delete("jadwaldiet", Authorization, handleDeleteScheduleById);
const deleteAllSchedule = app.delete("jadwaldiet", Authorization, handleDeleteAllSchedule);

module.exports = {
    getAllSchedule,
    getScheduleById,
    createSchedule,
    updateSchedule,
    deleteScheduleById,
    deleteAllSchedule
}