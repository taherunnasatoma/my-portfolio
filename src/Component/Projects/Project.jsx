import React from "react";


import projects from "../../data/project.json"; 
import ProjectSection from "./ProjectSection ";

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-4 max-w-7xl mx-auto bg-[#F1F2F4] rounded-2xl">
      <div className="max-w-5xl mx-auto ">
        <h2 className="text-4xl font-bold text-center mb-12"> Projects</h2>
        {projects.map((project) => (
          <ProjectSection key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
