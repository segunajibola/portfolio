import React from "react";
import { Link } from "react-router-dom";
import { project } from "../data/";
import ProjectCard from "./ProjectCard";

const HighlightProjects = () => {
  return (
    <div
      id="projects"
      className="relative pt-24 w-full text-gray-300 bg-[#0a192f] dark:bg-gray-100"
    >
      <div className="max-w-[950px] mx-auto p-4 flex flex-col justify-center h-full">
        <div className="absolute top-16 pl-4">
          <p className="opacity-10 text-9xl font-bold inline border-b-4 border-yellow-600 dark:text-gray-800">
            Projects
          </p>
        </div>
        <div className="">
          <div className="mt-20 text-2xl">
            <p>What I have built</p>
          </div>
          <div className="grid grid-cols-1 pt-8 md:-mt-5 md:pt-32 md:grid-cols-2 lg:grid-cols-3 gap-6 z-10 px-3">
            {project
              .map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))
              .slice(0, 6)}
          </div>
        </div>
        <Link to="/allprojects" className="flex justify-center">
          <button
            className="text-gray-100 border-2 hover:text-gray-800 hover:bg-gray-100 hover:border-gray-200 px-4 py-3 my-8 dark:text-gray-900 dark:border-gray-500 dark:hover:bg-gray-300 dark:hover:border-gray-800"
            onClick={() => window.scrollTo(0, 0)}
          >
            See all projects
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HighlightProjects;
