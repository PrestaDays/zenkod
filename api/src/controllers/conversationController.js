const { Conversation } = require("../models");

exports.getAllConversations = async (req, res) => {
    const conversations = await Conversation.findAll();
    res.json(conversations);
};

exports.getConversationById = async (req, res) => {
    const conversation = await Conversation.findByPk(req.params.id);
    res.json(conversation);
};

exports.createConversation = async (req, res) => {
    const conversation = await Conversation.create(req.body);
    res.status(201).json(conversation);
};
