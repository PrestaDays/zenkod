const db = require("../config/db");

const createEmail = async (subject, body, recipient) => {
    const [result] = await db.execute("INSERT INTO emails (subject, body, recipient) VALUES (?, ?, ?)", [subject, body, recipient]);
    return result;
};

const getEmailById = async (id) => {
    const [rows] = await db.execute("SELECT * FROM emails WHERE id = ?", [id]);
    return rows[0];
};

const getEmails = async () => {
    const [rows] = await db.execute("SELECT * FROM emails");
    return rows;
};

const updateEmail = async (id, subject, body, recipient) => {
    const [result] = await db.execute("UPDATE emails SET subject = ?, body = ?, recipient = ? WHERE id = ?", [subject, body, recipient, id]);
    return result;
};

const deleteEmail = async (id) => {
    const [result] = await db.execute("DELETE FROM emails WHERE id = ?", [id]);
    return result;
};

module.exports = { createEmail, getEmailById, getEmails, updateEmail, deleteEmail };