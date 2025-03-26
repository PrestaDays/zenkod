const { User } = require("../models");

exports.getAllUsers = async (req, res) => {
    const users = await User.findAll();
    res.json(users);
};

exports.getUserById = async (req, res) => {
    const user = await User.findByPk(req.params.id);
    res.json(user);
};

exports.createUser = async (req, res) => {
    const user = await User.create(req.body);
    res.status(201).json(user);
};

exports.updateUser = async (req, res) => {
    await User.update(req.body, { where: { id: req.params.id } });
    res.json({ message: "Utilisateur mis à jour" });
};

exports.deleteUser = async (req, res) => {
    await User.destroy({ where: { id: req.params.id } });
    res.json({ message: "Utilisateur supprimé" });
};
