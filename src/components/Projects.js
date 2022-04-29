import React from 'react';
import projectsImg from '../assets/projectsImg.jpeg';
import Vfl from '../assets/vfl.png';
import realEstate from '../assets/realestate.jpg';
import {
  FaGithub,
} from 'react-icons/fa';

const Projects = () => {
  return (
    <div name='projects' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[950px] mx-auto p-4 flex flex-col justify-center h-full'>
        <div className='absolute md:mb-16 md:pb-40 mb-96 -mt-36 pb-96 pl-4'>
          <p className='opacity-10 text-8xl font-bold inline border-b-4 border-yellow-600'>
            Projects
          </p>
        </div>

        <div className='grid grid-cols-1 md:mt-96 mt-44 pt-10 md:pt-32 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          <div className="bg-yellow-600 rounded-3xl shadow-lg">
                <a href="https://videvafashionline.vercel.app"><img src={Vfl} alt="" className="rounded-t-2xl object-cover object-top w-full h-40"/></a>
                <div className="p-6 rounded-b-3xl">
                    <h3 className="font-bold text-2xl">Videva Fashion Line</h3>
                    <p className="pt-3">
                        Fashion design website.
                    </p>
                    <p className="mt-5"><span className="font-semibold">Project stack: </span>HTML, Tailwindcss & Vanilla JavaScript</p>
                    <a href="https://videvafashionline.vercel.app" className="inline-block mt-6 px-2 py-1 bg-white rounded-md shadow-md text-sm font-bold text-black">View Live <i className="text-black fas fa-globe"></i></a>
                    <a href="https://github.com/segunajibola/VidevaFashionLine" className="inline-block ml-6 px-2 py-1 bg-white rounded-md shadow-md text-sm font-bold text-black">View On Github <FaGithub size={17} className='inline text-black' /></a>
                </div>
            </div>

            <div className="bg-yellow-600 rounded-3xl shadow-lg">
              <a href="https://videvafashionline.vercel.app"><img src={Vfl} alt="" className="rounded-t-2xl object-cover object-top w-full h-40"/></a>
              <div className="p-6 rounded-b-3xl">
                  <h3 className="font-bold text-2xl">Videva Fashion Line</h3>
                  <p className="pt-3">
                      Fashion design website.
                  </p>
                  <p className="mt-5"><span className="font-semibold">Project stack: </span>HTML, Tailwindcss & Vanilla JavaScript</p>
                  <a href="https://videvafashionline.vercel.app" className="inline-block mt-6 px-2 py-1 bg-white rounded-md shadow-md text-sm font-bold text-black">View Live <i className="text-black fas fa-globe"></i></a>
                  <a href="https://github.com/segunajibola/VidevaFashionLine" className="inline-block ml-6 px-2 py-1 bg-white rounded-md shadow-md text-sm font-bold text-black">View On Github <FaGithub size={17} className='inline text-black' /></a>
              </div>
          </div>

        </div>
{/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${projectsImg})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React JS Application
              </span>
              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          
            {/* Grid Item */}
          
          <div
            style={{ backgroundImage: `url(${realEstate})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React JS Application
              </span>
              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${projectsImg})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React JS Application
              </span>
              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${realEstate})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                React JS Application
              </span>
              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
