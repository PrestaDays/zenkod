const express = require("express");
const { getAllEmails, getEmailById, createEmail, updateEmail, deleteEmail } = require("../controllers/emailController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();
router.get("/", authMiddleware, getAllEmails);
router.get("/:id", authMiddleware, getEmailById);
router.post("/", authMiddleware, createEmail);
router.delete("/:id", authMiddleware, deleteEmail);

module.exports = router;
