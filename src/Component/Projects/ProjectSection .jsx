import React from "react";

const ProjectSection = ({ project }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-10 bg-white shadow-md rounded-xl p-6 mb-10">
      
      <div className="w-full lg:w-1/2">
        <img
          src={project.image}
          alt={project.title}
          className="rounded-lg w-full h-auto object-cover"
        />
      </div>

  
      <div className="w-full lg:w-1/2 space-y-4">
        <h2 className="text-3xl font-bold text-blue-600">{project.title}</h2>
        <p className="text-gray-700">{project.brief_description}</p>

        <div>
          <h3 className="font-semibold text-lg text-gray-800 mb-1">Main Features:</h3>
          <ul className="list-disc list-inside text-sm text-gray-600">
            {project.main_features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg text-gray-800 mb-1">Technologies:</h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-4 flex-wrap pt-2">
          <a
            href={project.live_link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-blue-600 text-white btn-sm"
          >
            🔗 Live Link
          </a>
          <a
            href={project.github_client_side}
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-gray-800 text-white btn-sm"
          >
            💻 GitHub (Client)
          </a>
          {project.github_server_side && (
            <a
              href={project.github_server_side}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-gray-800 text-white btn-sm"
            >
              🔧 GitHub (Server)
            </a>
          )}
          
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
