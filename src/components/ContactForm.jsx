import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        projet: '',
        email: '',
        message: ''
    });
    
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        if (status.message) setStatus({ type: '', message: '' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setStatus({ type: '', message: '' });

        try {
            const response = await fetch(`${import.meta.env.PUBLIC_API_URL}/api/send-email`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Une erreur est survenue');
            }

            setStatus({
                type: 'success',
                message: 'Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.'
            });

            setFormData({
                nom: '',
                prenom: '',
                projet: '',
                email: '',
                message: ''
            });

            setTimeout(() => {
                window.location.href = '/';
            }, 3000);

        } catch (err) {
            console.error('Erreur:', err);
            setStatus({
                type: 'error',
                message: 'Une erreur est survenue lors de l\'envoi. Veuillez réessayer.'
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="w-full max-w-4xl">
            <form
                onSubmit={handleSubmit}
                className="bg-[#4A6670] p-4 md:p-8 rounded-lg w-full max-w-4xl mb-12 md:mb-20 transform transition duration-700 hover:scale-[1.02] animate-fade-in"
            >
                <div className="flex flex-col md:flex-row md:space-x-8 mb-4 animate-slide-in">
                    <div className="w-full md:w-1/2 mb-4 md:mb-0">
                        <label className="text-white transition-all duration-300 hover:text-gray-200 block mb-1">Nom :</label>
                        <input
                            type="text"
                            name="nom"
                            value={formData.nom}
                            onChange={handleChange}
                            placeholder="Votre nom"
                            className="w-full p-2 rounded transition-all duration-300 focus:ring-2 focus:ring-blue-400 focus:scale-105 hover:shadow-lg"
                            required
                            disabled={isLoading}
                        />
                    </div>

                    <div className="w-full md:w-1/2">
                        <label className="text-white transition-all duration-300 hover:text-gray-200 block mb-1">Prénom :</label>
                        <input
                            type="text"
                            name="prenom"
                            value={formData.prenom}
                            onChange={handleChange}
                            placeholder="Votre prénom"
                            className="w-full p-2 rounded transition-all duration-300 focus:ring-2 focus:ring-blue-400 focus:scale-105 hover:shadow-lg"
                            required
                            disabled={isLoading}
                        />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row md:space-x-8 mb-4 animate-slide-in" style={{ animationDelay: '200ms' }}>
                    <div className="w-full md:w-1/2 mb-4 md:mb-0">
                        <label className="text-white transition-all duration-300 hover:text-gray-200 block mb-1">
                            Projet/Entreprise :
                        </label>
                        <input
                            type="text"
                            name="projet"
                            value={formData.projet}
                            onChange={handleChange}
                            placeholder="Nom de votre projet/entreprise"
                            className="w-full p-2 rounded transition-all duration-300 focus:ring-2 focus:ring-blue-400 focus:scale-105 hover:shadow-lg"
                            required
                            disabled={isLoading}
                        />
                    </div>

                    <div className="w-full md:w-1/2">
                        <label className="text-white transition-all duration-300 hover:text-gray-200 block mb-1">Email :</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Votre email"
                            className="w-full p-2 rounded transition-all duration-300 focus:ring-2 focus:ring-blue-400 focus:scale-105 hover:shadow-lg"
                            required
                            disabled={isLoading}
                        />
                    </div>
                </div>

                <div className="mb-4 animate-slide-in" style={{ animationDelay: '400ms' }}>
                    <label className="text-white transition-all duration-300 hover:text-gray-200 block mb-1">Message :</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Votre message"
                        rows="5"
                        className="w-full p-2 rounded transition-all duration-300 focus:ring-2 focus:ring-blue-400 focus:scale-105 hover:shadow-lg"
                        required
                        disabled={isLoading}
                    />
                </div>

                <div className="flex justify-center animate-bounce-in" style={{ animationDelay: '600ms' }}>
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="bg-[#D57A66] text-white px-4 py-2 rounded hover:bg-[#c56e5b] transition-colors disabled:opacity-50"
                    >
                        {isLoading ? (
                            <span className="flex items-center">
                <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                </svg>
                Envoi en cours...
              </span>
                        ) : 'Envoyer'}
                    </button>
                </div>

                {status.message && (
                    <div
                        className={`mt-4 p-4 rounded text-center ${
                            status.type === 'success'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-red-100 text-red-800'
                        }`}
                    >
                        {status.message}
                    </div>
                )}
            </form>
        </div>
    );
};

export default ContactForm;