require("dotenv").config();

module.exports = {
    DB_NAME: process.env.DB_NAME,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_HOST: process.env.DB_HOST || "localhost",
    JWT_SECRET: process.env.JWT_SECRET || "secret",
    JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || "1h"
};
