const express = require("express");
const { getAllMessages, getMessageById, createMessage, updateMessage, deleteMessage } = require("../controllers/messageController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();
router.get("/", authMiddleware, getAllMessages);
router.get("/:id", getMessageById);
router.post("/", createMessage);

module.exports = router;
