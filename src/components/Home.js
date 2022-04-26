import React from 'react';
import profileImg from '../assets/newPr.png';
import { HiArrowNarrowRight } from 'react-icons/hi';
import {
    FaWhatsapp,
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaTwitter,
  } from 'react-icons/fa';

const Home = () => {
  return (
    <div name='home' className='w-full bg-[#0a192f] overflow-hidden'>
      {/* Container */}
      <div className='relative md:flex flex-row justify-between md:pt-40 pt-24 px-4 max-w-7xl mx-auto'>
            <div className='max-w-[900px] px-8 flex flex-col justify-center'>
                <p className='text-yellow-600 text-2xl'>Hi, my name is</p>
                <h1 className='md:text-4xl text-5xl mb-4 font-bold text-[#ccd6f6]'>
                Segun Ajibola
                </h1>
                <h2 className='text-2xl sm:text-3xl font-bold text-[#8892b0]'>
                I'm a front-end developer, technical writer & open source contributor.
                </h2>
                <p className='text-[#8892b0] py-4 max-w-[700px]'>
                I'm focused on building responsive web apps with cool people for small & online businesses.
                </p>
                <div className='flex w-full'>
                    <button className='text-white text-xs border-2 border-gray-600 px-2 py-2 my-2 flex items-center hover:bg-yellow-600 hover:border-white'>
                        View Projects
                    </button>
                    <div class="lg:hidden inline-flex text-2xl space-x-3 ml-8 mt-4">
                            <a href="https://www.twitter.com/iamsegunajibola">
                                <FaTwitter size={30} className='text-blue-500' />
                            </a>
                            <a href="https://www.instagram.com/iamsegunajibola">
                                <FaInstagram size={30} className='text-red-300' />
                            </a>
                            <a href="https://wwww.github.com/segunajibola">
                                <FaGithub size={30} className='text-white' />
                            </a>
                            <a href="https://wa.me/2348105729893">
                                <FaWhatsapp size={30} className='text-green-500' />
                            </a>
                            <a href="https://wwww.github.com/segunajibola">
                                <FaLinkedin className='bg- white text-blue-500' size={30} />
                            </a>
                    </div>
                </div>
            </div>
            <div className='flex flex-shrink-0 justify-center sp:pb-0 md:pb-0 items-center'>
                <img src={profileImg} alt='Profile Image' className="rounded-full w-80 h-80 m-4" />
            </div>
       </div> 
    </div>
  );
};

export default Home;
