const { Email } = require("../models");

exports.getAllEmails = async (req, res) => {
    const emails = await Email.findAll();
    res.json(emails);
};

exports.getEmailById = async (req, res) => {
    const email = await Email.findByPk(req.params.id);
    res.json(email);
};

exports.createEmail = async (req, res) => {
    const email = await Email.create(req.body);
    res.status(201).json(email);
};

exports.updateEmail = async (req, res) => {
    await Email.update(req.body, { where: { id: req.params.id } });
    res.json({ message: "Email mis à jour" });
};

exports.deleteEmail = async (req, res) => {
    await Email.destroy({ where: { id: req.params.id } });
    res.json({ message: "Email supprimé" });
};
