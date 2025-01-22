import nodemailer from 'nodemailer';

export const POST = async ({ request } : any) => {
    try {
        const data = await request.json();

        console.log('Données reçues:', data);

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: import.meta.env.EMAIL_USER,
                pass: import.meta.env.EMAIL_PASS
            }
        });

        console.log('Transporteur créé');

        const mailOptions = {
            from: `"${data.nom} ${data.prenom}" <${data.email}>`,
            to: import.meta.env.EMAIL_USER,
            subject: `Nouveau message de contact - ${data.projet}`,
            html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #D57A66;">Nouveau message de contact</h2>
          <p><strong>Nom:</strong> ${data.nom}</p>
          <p><strong>Prénom:</strong> ${data.prenom}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Projet:</strong> ${data.projet}</p>
          <h3>Message:</h3>
          <p style="white-space: pre-line;">${data.message}</p>
        </div>
      `
        };

        // Log pour debug
        console.log('Tentative d\'envoi...');

        const info = await transporter.sendMail(mailOptions);

        console.log('Email envoyé:', info.response);

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
        console.error('Erreur complète:', error);
        return new Response(
            JSON.stringify({
                message: 'Erreur lors de l\'envoi de l\'email',
                error: error.message
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