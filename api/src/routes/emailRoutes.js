const express = require("express");
const emailController = require("../controllers/emailController");

const router = express.Router();

router.post("/", emailController.createEmail);
router.get("/", emailController.getEmails);
router.get("/:id", emailController.getEmailById);
router.put("/:id", emailController.updateEmail);
router.delete("/:id", emailController.deleteEmail);

module.exports = router; 