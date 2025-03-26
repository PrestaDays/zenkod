const { verifyToken } = require("../utils/jwtUtils");

module.exports = (req, res, next) => {
    const authHeader = req.header("Authorization");

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Accès refusé, token manquant" });
    }

    try {
        const token = authHeader.split(" ")[1];
        req.user = verifyToken(token);
        next();
    } catch (error) {
        return res.status(401).json({ message: "Token invalide ou expiré" });
    }
};
