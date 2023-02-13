import { useState } from 'react';
import {
  FaMoon,
  FaLightbulb,
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
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Navbar = ({ handleMode, darkMode }) => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed z-20 w-full h-[53px] shadow-lg flex justify-between items-center px-4 bg-[#050f1d] dark:bg-gray-300 text-gray-300 dark:text-gray-800'>
        
      <Link className="cursor-pointer" to='/' onClick={() => window.scrollTo(0, 0)}>
        <img src={Logo} alt='Logo Image' style={{ width: "40px", height: "40px", borderRadius: "50px" }} />
      </Link>

      {/* menu */}
      <ul className='hidden md:flex space-x-10 mr-4 text-sm'>
        <li className='cursor-pointer'>
          <HashLink to='/' onClick={() => window.scrollTo(0, 0)}>
            Home
          </HashLink>
        </li>
        <li className='cursor-pointer'>
          <a href="https://blog.segunajibola.com">
              Blog
          </a>
        </li>
        <li className='cursor-pointer'>
          <HashLink to='/#about'>
            About
          </HashLink>
        </li>
        <li className='cursor-pointer'>
          <HashLink to='/#tools'>
            Tools
          </HashLink>
        </li>
        <li className='cursor-pointer'>
          <HashLink to='/#projects'>
            Projects
          </HashLink>
        </li>
        <li className='cursor-pointer'>
          <a href='https://drive.google.com/file/d/1WeurDP0scU81V7QawRa7VlugkPBZfQta/view?usp=sharing'>
            Resume
          </a>
        </li>
        <li className='cursor-pointer'>
          <HashLink to='/#contact'>
            Contact
          </HashLink>
        </li>
      </ul>

      {/* Dark/Light Mode */}
      <div onClick={handleMode} className='z-30 ml-72 sm:ml-[30rem] md:ml-0 cursor-pointer dark:text-gray-800'>
        {darkMode ? <FaMoon size={20} /> : <FaLightbulb size={20} />}
      </div>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-30 cursor-pointer dark:text-gray-800'>
        {!nav ? <FaBars size={20} /> : <FaTimes size={20} />}
      </div>

      {/* Mobile menu */}
      <ul id="nav"
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full z-20 h-screen bg-[#0a192f] flex flex-col justify-center items-center dark:bg-gray-100 dark:text-gray-800'
        }
      >
        <li className='py-2 text-3xl'>
           <a onClick={handleClick} className="cursor-pointer" href="https://blog.segunajibola.com">
            Blog
          </a>
        </li>
        <li className='py-2 text-3xl'>
           <HashLink onClick={handleClick} className="cursor-pointer" to='/#tools'>
            Tools
          </HashLink>
        </li>
        <li className='py-2 text-3xl'>
          {' '}
           <HashLink onClick={handleClick} className="cursor-pointer" to='/'>
            Home
          </HashLink>
        </li>
        <li className='py-2 text-3xl'>
           <HashLink onClick={handleClick} className="cursor-pointer" to='/#about'>
            About
          </HashLink>
        </li>
        <li className='py-2 text-3xl'>
           <HashLink onClick={handleClick} className="cursor-pointer" to='/#contact'>
            Contact
          </HashLink>
        </li>
        <li className='py-2 text-3xl'>
           <HashLink onClick={handleClick} className="cursor-pointer" to='/#projects'>
            Projects
          </HashLink>
        </li>
        <li className='py-2 text-3xl'>
           <HashLink onClick={handleClick} className="cursor-pointer" to='/#testimonials'>
            Testimonials
          </HashLink>
        </li>
        <li className='py-2 text-3xl'>
           <a onClick={handleClick} className="cursor-pointer" href='https://drive.google.com/file/d/1WeurDP0scU81V7QawRa7VlugkPBZfQta/view?usp=sharing'>
            Download Resume
          </a>
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
              href='mailto:ajbl.segun@gmail.com'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[100px] h-[40px] flex justify-between items-center ml-[-55px] hover:ml-[-0px] hover:px-1 duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://drive.google.com/file/d/1WeurDP0scU81V7QawRa7VlugkPBZfQta/view?usp=sharing'
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
