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
const port = 3000;

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

app.post('/api/send-email', async (req, res) => {
    try {
        const data = req.body;

        console.log('Données reçues:', data);

        const lambdaUrl = process.env.LAMBDA_API_URL;

        if (!lambdaUrl) {
            throw new Error('L\'URL de l\'API Lambda n\'est pas définie');
        }

        const response = await fetch(lambdaUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.message || 'Erreur lors de l\'envoi via Lambda');
        }

        console.log('Email envoyé via Lambda:', result);

        return res.status(200).json({
            message: 'Email envoyé avec succès'
        });

    } catch (error) {
        return res.status(500).json({
            message: 'Erreur lors de l\'envoi de l\'email',
            error: error instanceof Error ? error.message : 'Erreur inconnue'
        });
    }
});

app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});