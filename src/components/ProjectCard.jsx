import React from "react";
import { FaGithub, FaGlobe } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-yellow-700 rounded-3xl shadow-lg" key={project.id}>
      <img
        src={project.image}
        alt={project.alt}
        className="rounded-t-2xl object-cover object-top w-full h-40"
      />
      <div className="p-3">
        <h3 className="font-bold text-2xl">{project.name}</h3>
        <p className="pt-2">{project.description}</p>
        <p className="mt-2">
          <span className="font-semibold">Project stack: </span>
          {project.stack}
        </p>
        <p className="mt-2">
          <span className="font-semibold">Status: </span>
          {project.status}
        </p>
        <div className="flex justify-between mt-4 mb-1">
          <a
            href={project.link}
            className="inline-block px-2 py-1 bg-white rounded-md shadow-md text-sm font-bold text-black"
          >
            View Live <FaGlobe size={13} className="inline mb-1 text-black" />
          </a>
          <a
            href={project.github}
            className={`inline-block px-2 py-1 bg-white rounded-md shadow-md text-sm font-bold text-black ${
              project.github ? "" : "cursor-not-allowed bg-gray-300"
            }`}
          >
            View On Github
            <FaGithub size={15} className="inline ml-1 mb-1 text-black" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
