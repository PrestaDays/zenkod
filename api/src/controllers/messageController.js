const { Message } = require("../models");

exports.getAllMessages = async (req, res) => {
    const messages = await Message.findAll();
    res.json(messages);
};

exports.getMessageById = async (req, res) => {
    const message = await Message.findByPk(req.params.id);
    res.json(message);
};

exports.createMessage = async (req, res) => {
    const message = await Message.create(req.body);
    res.status(201).json(message);
};
