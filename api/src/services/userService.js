const userModel = require("../models/userModel");

const getUsers = async () => {
    return await userModel.getUsers();
};

const getUserById = async (id) => {
    return await userModel.getUserById(id);
};

const updateUser = async (id, userData) => {
    return await userModel.updateUser(id, userData);
};

const deleteUser = async (id) => {
    return await userModel.deleteUser(id);
};

module.exports = { getUsers, getUserById, updateUser, deleteUser };
