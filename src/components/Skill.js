import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import FireBase from '../assets/firebase.png';
import AWS from '../assets/aws.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div className='absolute mb-40 pb-48 pl-4'>
              <p className='opacity-10 text-8xl font-bold inline border-b-4 border-yellow-600'>Skills</p>
          </div>

          <div className='w-full z-10 grid grid-cols-2 sm:grid-cols-4 gap-5 text-center py-8'>
              <div className='rounded-lg rounded-lg shadow-xl shadow-yellow-500 hover:scale-110 hover:shadow-xl duration-500'>
                  <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                  <p className='my-4'>HTML</p>
              </div>
              <div className='rounded-lg shadow-xl shadow-yellow-500 hover:scale-110 hover:shadow-xl duration-500'>
                  <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='rounded-lg shadow-xl shadow-yellow-500 hover:scale-110 hover:shadow-xl duration-500'>
                  <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='rounded-lg shadow-xl shadow-yellow-500 hover:scale-110 hover:shadow-xl duration-500'>
                  <img className='w-20 mx-auto' src={AWS} alt="HTML icon" />
                  <p className='my-4'>TAILWINDCSS</p>
              </div>
              <div className='rounded-lg shadow-xl shadow-yellow-500 hover:scale-110 hover:shadow-xl duration-500'>
                  <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                  <p className='my-4'>REACT</p>
              </div>
              <div className='rounded-lg shadow-xl shadow-yellow-500 hover:scale-110 hover:shadow-xl duration-500'>
                  <img className='w-20 mx-auto' src={GitHub} alt="HTML icon" />
                  <p className='my-4'>GIT</p>
              </div>
              <div className='rounded-lg shadow-xl shadow-yellow-500 hover:scale-110 hover:shadow-xl duration-500'>
                  <img className='w-20 mx-auto' src={Node} alt="HTML icon" />
                  <p className='my-4'>GITHUB</p>
              </div>
              <div className='rounded-lg shadow-xl shadow-yellow-500 hover:scale-110 hover:shadow-xl duration-500'>
                  <img className='w-20 mx-auto' src={Mongo} alt="HTML icon" />
                  <p className='my-4'>FIREBASE</p>
              </div>
              
          </div>
      </div>
    </div>
  );
};

export default Skills;
