import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import * as dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.post('/api/send-email', async (req, res) => {
    try {
        const { nom, prenom, email, projet, message } = req.body;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        const mailOptions = {
            from: `"${nom} ${prenom}" <${email}>`,
            to: process.env.EMAIL_USER,
            subject: `Nouveau message de contact - ${projet}`,
            html: `
                <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
                    <h2 style="color: #D57A66;">Nouveau message de contact</h2>
                    <p><strong>Nom:</strong> ${nom}</p>
                    <p><strong>Prénom:</strong> ${prenom}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Projet:</strong> ${projet}</p>
                    <h3>Message:</h3>
                    <p style="white-space: pre-line;">${message}</p>
                </div>
            `
        };

        await transporter.sendMail(mailOptions);

        res.status(200).json({
            success: true,
            message: 'Email envoyé avec succès'
        });

    } catch (error) {
        console.error('Erreur lors de l\'envoi:', error);
        res.status(500).json({
            success: false,
            message: 'Erreur lors de l\'envoi de l\'email',
            error: error.message
        });
    }
});

app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});