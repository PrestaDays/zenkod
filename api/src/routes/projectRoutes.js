const express = require("express");
const { getAllProjects, getProjectById, createProject, updateProject, deleteProject } = require("../controllers/projectController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();
router.get("/", getAllProjects);
router.get("/:id", getProjectById);
router.post("/", authMiddleware, createProject);
router.put("/:id", authMiddleware, updateProject);
router.delete("/:id", authMiddleware, deleteProject);

module.exports = router;
