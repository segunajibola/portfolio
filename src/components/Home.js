import React from 'react';
import profileImg from '../assets/newPr.png';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='relative md:flex justify-between pt-4 px-4 md:pt-10 w-full max-w-7xl md:mt-20 mx-auto flex h-full'>
            <div className='max-w-[500px] px-8 flex flex-col justify-center h-full'>
                <p className='text-pink-600'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
                Segun Ajibola
                </h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
                I'm a front-end Developer, technical writer & open source contributor.
                </h2>
                <p className='text-[#8892b0] py-4 max-w-[700px]'>
                I'm focused on building cool web apps with cool people on the web. Currently, I'm focused on
                building responsive full-stack web pages.
                </p>
                <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                    View Projects
                    <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-3 ' />
                    </span>
                </button>
                </div>
            </div>
            <div className='max-w-[100px] px-8 flex justify-center'>
                <img src={profileImg} alt='Profile Image' style={{ width: '200px', height: "80px", borderRadius: "10px" }} />
            </div>

       </div> 
    </div>
  );
};

export default Home;
