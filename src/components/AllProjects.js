import React from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
import data from "../data/projects.js";
import {
  FaGithub,
  FaGlobe
} from 'react-icons/fa';

const AllProjects = () => {
    return (
        <div className='w-full text-gray-300 bg-[#0a192f] dark:bg-gray-100'>
          <div className='max-w-[950px] mx-auto p-4 flex flex-col justify-center h-full'>
            <div className='relative pt-20 pl-4'>
              <p className='absolute opacity-10 text-9xl font-bold inline border-b-4 border-yellow-600 dark:text-gray-800 dark:opacity-60'>
                Projects
              </p>
            </div>
            <div className='grid grid-cols-1 pt-20 md:-mt-5 md:pt-32 md:grid-cols-2 lg:grid-cols-3 gap-6 z-10'>
              {data.map((project) => (
                  <div className="bg-yellow-600 rounded-3xl shadow-lg">
                  <a href={project.link}><img src={project.image} alt={project.alt} className="rounded-t-2xl object-cover object-top w-full h-40"/></a>
                  <div className="p-3">
                      <h3 className="font-bold text-2xl">{project.name}</h3>
                      <p className="pt-2">
                          {project.title}
                      </p>
                      <p className="mt-2"><span className="font-semibold">Project stack: </span>{project.stack}</p>
                      <a href={project.link} className="inline-block mt-4 px-2 py-1 bg-white rounded-md shadow-md text-sm font-bold text-black">View Live <FaGlobe size={14} className='inline mb-1 text-black' /></a>
                      <a href={project.github} className="inline-block ml-6 px-2 py-1 bg-white rounded-md shadow-md text-sm font-bold text-black">View On Github <FaGithub size={15} className='inline mb-1 text-black' /></a>
                  </div>
              </div>
              ))}
            </div>
          </div>
        </div>
      );
}

export default AllProjects