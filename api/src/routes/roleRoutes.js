const express = require('express');
const { getRoles, createRole, getRoleById, updateRole, deleteRole } = require('../controllers/roleController');
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.get('/', authMiddleware, getRoles);
router.post('/', authMiddleware, createRole);
router.get('/:id', authMiddleware, getRoleById);
router.put('/:id', authMiddleware, updateRole);
router.delete('/:id', authMiddleware, deleteRole);

module.exports = router;
