import { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed z-20 w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        
        {/* <li className='py-2 text-3xl'> */}
            <Link className="cursor-pointer" to='home' smooth={true} duration={500}>
            <img src={Logo} alt='Logo Image' style={{ width: '40px', height: "40px", borderRadius: "50px" }} />
            </Link>
        {/* </li> */}

      {/* menu */}
      <ul className='hidden md:flex space-x-10 mr-4 text-sm'>
        <li className='cursor-pointer'>
            <Link to='www.google.com' smooth={true} duration={500}>
                Blog
            </Link>
        </li>
        <li className='cursor-pointer'>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='cursor-pointer'>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='cursor-pointer'>
          <Link to='projects' smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className='cursor-pointer'>
          <Link to='projects' smooth={true} duration={500}>
            Resume
          </Link>
        </li>
        <li className='cursor-pointer'>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-30 cursor-pointer'>
        {!nav ? <FaBars size={20} /> : <FaTimes size={20} />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full z-20 h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className='py-2 text-3xl'>
          {' '}
           <Link onClick={handleClick} className="cursor-pointer" to='projects' smooth={true} duration={500}>
            Blog
          </Link>
        </li>
        <li className='py-2 text-3xl'>
          {' '}
           <Link onClick={handleClick} className="cursor-pointer" to='tools' smooth={true} duration={500}>
            Tools
          </Link>
        </li>
        <li className='py-2 text-3xl'>
          {' '}
           <Link onClick={handleClick} className="cursor-pointer" to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-2 text-3xl'>
          {' '}
           <Link onClick={handleClick} className="cursor-pointer" to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-2 text-3xl'>
          {' '}
           <Link onClick={handleClick} className="cursor-pointer" to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        <li className='py-2 text-3xl'>
          {' '}
           <Link onClick={handleClick} className="cursor-pointer" to='projects' smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className='py-2 text-3xl'>
          {' '}
           <Link onClick={handleClick} className="cursor-pointer" to='testimonials' smooth={true} duration={500}>
            Testimonials
          </Link>
        </li>
        <li className='py-2 text-3xl'>
          {' '}
           <Link onClick={handleClick} className="cursor-pointer" to='projects' smooth={true} duration={500}>
            Download Resume
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[100px] h-[40px] flex justify-between items-center ml-[-70px] hover:ml-[-0px] hover:px-1 duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[100px] h-[40px] flex justify-between items-center ml-[-65px] hover:ml-[-0px] hover:px-1 duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[100px] h-[40px] flex justify-between items-center ml-[-60px] hover:ml-[-0px] hover:px-1 duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[100px] h-[40px] flex justify-between items-center ml-[-55px] hover:ml-[-0px] hover:px-1 duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
