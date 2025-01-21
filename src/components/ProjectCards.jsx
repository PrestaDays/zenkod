import React from 'react';

const ProjectCards = () => {
    const projects = [
        {
            image: "/assets/logo_althers.png",
            title: "iWorkout",
            description: "iWorkout est une application mobile propulsée par IA qui fourni un plan de musculation en fonction des objectifs définis par l'utilisateur."
        },
        {
            image: "/assets/logo_raltech.png",
            title: "Raltech",
            description: "Raltech est une école de code en ligne avec laquelle nous avons collaboré pour la conception de leur site internet."
        },
        {
            image: "/assets/logo_black.png",
            title: "Zenkod",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
    ];

    return (
        <div className="projects-card-home">
            {projects.map((project, index) => (
                <div
                    key={index}
                    className="project-card transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                    <img src={project.image} alt={project.title} className="logo_alther" />
                    <h3 className="text-title-card-home">{project.title}</h3>
                    <p>{project.description}</p>
                </div>
            ))}
        </div>
    );
};

export default ProjectCards;