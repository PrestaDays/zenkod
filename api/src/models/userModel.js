const db = require("../config/db");

const createUser = async (email, password) => {
    const [result] = await db.execute("INSERT INTO users (email, password) VALUES (?, ?)", [email, password]);
    return result;
};

const getUserByEmail = async (email) => {
    const [rows] = await db.execute("SELECT * FROM users WHERE email = ?", [email]);
    return rows[0];
};

const getUserById = async (id) => {
    const [rows] = await db.execute("SELECT * FROM users WHERE id = ?", [id]);
    return rows[0];
};

const getUsers = async () => {
    const [rows] = await db.execute("SELECT * FROM users");
    return rows;
};

const updateUser = async (id, email, password) => {
    const [result] = await db.execute("UPDATE users SET email = ?, password = ? WHERE id = ?", [email, password, id]);
    return result;
};

const deleteUser = async (id) => {
    const [result] = await db.execute("DELETE FROM users WHERE id = ?", [id]);
    return result;
};

module.exports = { createUser, getUserByEmail, getUserById, getUsers, updateUser, deleteUser };
