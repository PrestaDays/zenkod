const emailService = require("../services/emailService");

exports.createEmail = async (req, res) => {
    try {
        const email = await emailService.createEmail(req.body);
        res.status(201).json(email);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erreur serveur", error: error.message });
    }
};

exports.getEmails = async (req, res) => {
    try {
        const emails = await emailService.getEmails();
        res.json(emails);
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur", error: error.message });
    }
};

exports.getEmailById = async (req, res) => {
    try {
        const email = await emailService.getEmailById(req.params.id);
        if (!email) return res.status(404).json({ message: "Email non trouvé" });
        res.json(email);
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur", error: error.message });
    }
};

exports.updateEmail = async (req, res) => {
    try {
        const email = await emailService.updateEmail(req.params.id, req.body);
        if (!email) return res.status(404).json({ message: "Email non trouvé" });
        res.json(email);
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur", error: error.message });
    }
};

exports.deleteEmail = async (req, res) => {
    try {
        const email = await emailService.deleteEmail(req.params.id);
        if (!email) return res.status(404).json({ message: "Email non trouvé" });
        res.json({ message: "Email supprimé" });
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur", error: error.message });
    }
}; 