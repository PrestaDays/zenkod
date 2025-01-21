import React from 'react';

const TeamDisplay = () => {
    const teamMembers = [
        {
            nom: "Cavagne",
            prenom: "Anthony",
            role: "Fondateur",
            image: "/images/profiles/photoanthony.jpg"
        },
        {
            nom: "Gomez",
            prenom: "Tatiana",
            role: "Co-Dirigeante",
            image: "/images/profiles/phototatiana.jpg"
        },
        {
            nom: "Escaffre",
            prenom: "Lucas",
            role: "Project Lead",
            image: "/images/profiles/photolucas.jpg"
        },
        {
            nom: "Barrabé",
            prenom: "Sarah",
            role: "Développeuse",
            image: "/images/profiles/photosarah.jpg"
        },
        {
            nom: "Manevit",
            prenom: "Théo",
            role: "Intégrateur web",
            image: "/images/profiles/phototheo.jpg"
        },
        {
            nom: "Bertrand",
            prenom: "Guillaume",
            role: "Architecte logiciel",
            image: "/images/profiles/photoguillaume.jpg"
        },
        {
            nom: "Mbanzulu",
            prenom: "Myriam",
            role: "Stratégie communication",
            image: "/images/profiles/photomyriam.jpg"
        },
        {
            nom: "Provo",
            prenom: "Alexis",
            role: "Développeur",
            image: "/images/profiles/photoalexis.jpg"
        },
        {
            nom: "Adopre-Doh",
            prenom: "Rodolphe",
            role: "Développeur",
            image: "/images/profiles/photorodolphe.jpg"
        },
        {
            nom: "Atwe",
            prenom: "Rawan",
            role: "Community Manager",
            image: "/images/profiles/photorawan.jpg"
        },
        {
            nom: "Quashie",
            prenom: "Douglas",
            role: "Développeur",
            image: "/images/profiles/photodougi.jpg"
        }
    ];

    return (
        <div className="py-12">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Notre équipe de choc </h2>
                <div className="flex flex-wrap gap-6 justify-center">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="bg-[#FEF6F0] p-4 rounded-lg w-96 transform transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
                        >
                            <div className="flex items-center">
                                <div className="w-16 h-16 rounded-full overflow-hidden">
                                    <img
                                        src={member.image}
                                        alt={`${member.prenom} ${member.nom}`}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = "/api/placeholder/64/64";
                                        }}
                                    />
                                </div>
                                <div className="ml-4">
                                    <h3 className="font-bold">{member.prenom} {member.nom}</h3>
                                    <p>{member.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TeamDisplay;