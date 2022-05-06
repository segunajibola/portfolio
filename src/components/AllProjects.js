import ProjectCard from "./ProjectCard";
import data from "../data/projects.js";

const AllProjects = () => {
    return (
        <div className='w-full text-gray-300 bg-[#0a192f] dark:bg-gray-100'>
          <div className='max-w-[950px] mx-auto p-4 flex flex-col justify-center h-full'>
            <div className='relative pt-20 pl-4'>
              <p className='absolute opacity-10 text-9xl font-bold inline border-b-4 border-yellow-600 dark:text-gray-800'>
                Projects
              </p>
            </div>
            <div className='grid grid-cols-1 mb-5 pt-20 md:-mt-5 md:pt-32 md:grid-cols-2 lg:grid-cols-3 gap-6 z-10'>
            {data.map((project) => 
              <ProjectCard project={project}/>
            )}
            </div>
          </div>
        </div>
      );
}

export default AllProjects