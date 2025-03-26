const sequelize = require("../config/database");
const Role = require("./Role");
const User = require("./User");
const Project = require("./Project");
const ProjectUser = require("./ProjectUser");
const Email = require("./Email");
const Conversation = require("./Conversation");
const ConversationUser = require("./ConversationUser");
const Message = require("./Message");

const db = { sequelize, Role, User, Project, ProjectUser, Email, Conversation, ConversationUser, Message };

sequelize.sync({ alter: true }).then(() => console.log("Base de données synchronisée"));

module.exports = db;
