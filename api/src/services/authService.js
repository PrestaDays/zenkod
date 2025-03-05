const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
require("dotenv").config();

const register = async (email, password) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    return await userModel.createUser(email, hashedPassword);
};

const login = async (email, password) => {
    const user = await userModel.getUserByEmail(email);
    if (!user || !(await bcrypt.compare(password, user.password))) {
        throw new Error("Email ou mot de passe incorrect");
    }
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    return { user, token };
};

module.exports = { register, login };
