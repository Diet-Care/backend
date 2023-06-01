const { Users } = require("../db/models");

const handleuserall = async (req, res) => {

    const users = await Users.findAll();
    const response = {
                status: "SUCCESS",
                message: "Get All Todo",
                meta: {
                    total: users.length
                },
                data: users
        }

    res.status(200).json(response)
    return
};

module.exports = {
    handleuserall
}