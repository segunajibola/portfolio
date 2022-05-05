import data from "../data/projects.js";
import {
  FaGithub,
  FaGlobe
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <div name='projects' className='w-full text-gray-300 bg-[#0a192f] dark:bg-gray-100'>
      <div className='max-w-[950px] mx-auto p-4 flex flex-col justify-center h-full'>
        <div className='relative pt-20 pl-4'>
          <p className='absolute opacity-10 text-9xl font-bold inline border-b-4 border-yellow-600 dark:text-gray-800 dark:opacity-60'>
            Projects
          </p>
        </div>
        <div className='grid grid-cols-1 pt-20 md:-mt-5 md:pt-32 md:grid-cols-2 lg:grid-cols-3 gap-6 z-10'>
          {data.filter((item, index) => index < 3).map((project) => (
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
          <Link to="/allprojects" smooth={true} duration={500}>
            <button className='text-gray-100 border-2 hover:text-gray-800 hover:bg-gray-100 hover:border-gray-200 px-4 py-3 my-8 mx-auto flex items-center dark:text-gray-900 dark:border-gray-500 dark:hover:bg-gray-300 dark:hover:border-gray-800' onClick={() => window.scrollTo(0, 0)}>
            See all projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
