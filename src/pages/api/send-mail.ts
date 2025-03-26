import type { APIRoute } from 'astro';

interface ContactFormData {
    nom: string;
    prenom: string;
    email: string;
    projet: string;
    message: string;
}

export const POST: APIRoute = async ({ request }) => {
    try {
        const data = await request.json() as ContactFormData;

        console.log('Données reçues:', data);

        const lambdaUrl = import.meta.env.LAMBDA_API_URL;

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

        return new Response(
            JSON.stringify({
                message: 'Email envoyé avec succès'
            }),
            {
                status: 200,
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );

    } catch (error) {
        console.error('Erreur complète:', error instanceof Error ? error.message : String(error));
        return new Response(
            JSON.stringify({
                message: 'Erreur lors de l\'envoi de l\'email',
                error: error instanceof Error ? error.message : 'Erreur inconnue'
            }),
            {
                status: 500,
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
    }
};