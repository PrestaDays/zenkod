const express = require("express");
const { getAllConversations, getConversationById, createConversation, updateConversation, deleteConversation } = require("../controllers/conversationController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();
router.get("/", authMiddleware, getAllConversations);
router.get("/:id", getConversationById);
router.post("/", createConversation);

module.exports = router;
