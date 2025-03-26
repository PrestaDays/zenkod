const bcrypt = require("bcrypt");
const { User, Role } = require("../models");
const { generateToken } = require("../utils/jwtUtils");

exports.register = async (req, res) => {
    try {
        const { email, password, firstname, lastname } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        const role = await Role.findOne({ where: { libelle: 'collaborateur' } });

        if (!role) {
            return res.status(400).json({ message: "Rôle de collaborateur non trouvé" });
        }

        const user = await User.create({ email, password: hashedPassword, firstname, lastname, roleId: role.id });
        res.status(201).json({ message: "Utilisateur créé", user });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: "Email ou mot de passe incorrect" });
        }

        res.json({ token: generateToken(user) });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
