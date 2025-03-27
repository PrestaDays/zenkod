import React from 'react';

const ProjectCards = () => {
    const projects = [
        {
            image: "/assets/logo_althers.png",
            title: "iWorkout",
            description: "iWorkout est une application mobile propulsée par IA qui fourni un plan de musculation en fonction des objectifs définis par l'utilisateur.",
            link: ""
        },
        {
            image: "/assets/logo_raltech.png",
            title: "Raltech",
            description: "Raltech est une école de code en ligne avec laquelle nous avons collaboré pour la conception de leur site internet.",
            link: "https://raltech.school/"
        },
        {
            image: "/assets/logo_black.png",
            title: "Zenkod",
            description: "Zenkod est une plateforme de prestation de services informatiques qui propose des solutions sur mesure pour les entreprises.",
            link: ""
        }
    ];

    return (
        <div className="w-full max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-[#FEF6F0] rounded-xl p-8 md:p-10 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    >
                        <div className="flex flex-col items-center space-y-6">
                            <div className="w-40 h-40 flex items-center justify-center p-4">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <h3 className="text-2xl font-bold text-center">
                                {project.title}
                            </h3>
                            <p className="text-gray-700 text-center">
                                {project.description}
                            </p>
                            {project.link && (
                                <a
                                    href={project.link}
                                    className="bg-accent text-white px-6 py-2 rounded-lg hover:bg-accent/90 transition-colors duration-200"
                                >
                                    Voir le projet
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectCards;