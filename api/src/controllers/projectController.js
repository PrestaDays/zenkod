const { Project } = require("../models");

exports.getAllProjects = async (req, res) => {
    const projects = await Project.findAll();
    res.json(projects);
};

exports.getProjectById = async (req, res) => {
    const project = await Project.findByPk(req.params.id);
    res.json(project);
};

exports.createProject = async (req, res) => {
    const project = await Project.create(req.body);
    res.status(201).json(project);
};

exports.updateProject = async (req, res) => {
    await Project.update(req.body, { where: { id: req.params.id } });
    res.json({ message: "Projet mis à jour" });
};

exports.deleteProject = async (req, res) => {
    await Project.destroy({ where: { id: req.params.id } });
    res.json({ message: "Projet supprimé" });
};
