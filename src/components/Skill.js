import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Firebase from '../assets/firebase.png';
import Git from '../assets/git.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Bootstrap from '../assets/bootstrap.png';
import Vercel from '../assets/vercel.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full pt-96 md:pt-0 h-screen bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div className='absolute md:mb-32 md:pb-48 mb-96 -mt-10 pb-96 pl-4'>
              <p className='opacity-10 text-8xl font-bold inline border-b-4 border-yellow-600'>Skills</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-5 gap-5 text-center py-10'>
              <div className='rounded-lg shadow-xl shadow-yellow-500 hover:scale-110 hover:shadow-xl duration-500'>
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
                  <img className='w-20 mx-auto' src={Bootstrap} alt="HTML icon" />
                  <p className='my-4'>BOOTSTRAP</p>
              </div>
              <div className='rounded-lg shadow-xl shadow-yellow-500 hover:scale-110 hover:shadow-xl duration-500'>
                  <img className='w-20 mx-auto' src={Tailwind} alt="HTML icon" />
                  <p className='my-4'>TAILWINDCSS</p>
              </div>
              <div className='rounded-lg shadow-xl shadow-yellow-500 hover:scale-110 hover:shadow-xl duration-500'>
                  <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                  <p className='my-4'>REACT</p>
              </div>
              <div className='rounded-lg shadow-xl shadow-yellow-500 hover:scale-110 hover:shadow-xl duration-500'>
                  <img className='w-20 mx-auto' src={Git} alt="HTML icon" />
                  <p className='my-4'>GIT</p>
              </div>
              <div className='rounded-lg shadow-xl shadow-yellow-500 hover:scale-110 hover:shadow-xl duration-500'>
                  <img className='w-20 mx-auto' src={GitHub} alt="HTML icon" />
                  <p className='my-4'>GITHUB</p>
              </div>
              <div className='rounded-lg shadow-xl shadow-yellow-500 hover:scale-110 hover:shadow-xl duration-500'>
                  <img className='w-20 mx-auto' src={Firebase} alt="HTML icon" />
                  <p className='my-4'>FIREBASE</p>
              </div>
              <div className='rounded-lg shadow-xl shadow-yellow-500 hover:scale-110 hover:shadow-xl duration-500'>
                  <img className='w-20 mx-auto' src={Vercel} alt="HTML icon" />
                  <p className='my-4'>VERCEL</p>
              </div>
              
          </div>
      </div>
    </div>
  );
};

export default Skills;
