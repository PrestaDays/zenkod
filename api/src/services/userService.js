const userModel = require("../models/userModel");

const getUsers = async () => {
    return await userModel.getUsers();
};

const getUserById = async (id) => {
    return await userModel.getUserById(id);
};

module.exports = { getUsers, getUserById };
