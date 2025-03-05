const emailModel = require("../models/emailModel");

const createEmail = async (data) => {
    return await emailModel.createEmail(data.subject, data.body, data.recipient);
};

const getEmails = async () => {
    return await emailModel.getEmails();
};

const getEmailById = async (id) => {
    return await emailModel.getEmailById(id);
};

const updateEmail = async (id, data) => {
    return await emailModel.updateEmail(id, data.subject, data.body, data.recipient);
};

const deleteEmail = async (id) => {
    return await emailModel.deleteEmail(id);
};

module.exports = { createEmail, getEmails, getEmailById, updateEmail, deleteEmail };