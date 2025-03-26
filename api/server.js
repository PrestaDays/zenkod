const express = require("express");
const db = require("./src/models");
const authRoutes = require("./src/routes/authRoutes");
const userRoutes = require("./src/routes/userRoutes");
const conversationRoutes = require("./src/routes/conversationRoutes");
const messageRoutes = require("./src/routes/messageRoutes");
const emailRoutes = require("./src/routes/emailRoutes");
const projectRoutes = require("./src/routes/projectRoutes");
const roleRoutes = require("./src/routes/roleRoutes")

const app = express();
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/roles", roleRoutes)
app.use("/conversations", conversationRoutes);
app.use("/messages", messageRoutes);
app.use("/emails", emailRoutes);
app.use("/projects", projectRoutes);

app.listen(3000, () => console.log("Serveur en écoute sur le port 3000"));
