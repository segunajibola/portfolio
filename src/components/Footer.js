import {
    FaWhatsapp,
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaTwitter,
  } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
  return (
    <footer className='w-full text-gray-300 bg-[#0a192f] md:mx-0 dark:bg-gray-300 dark:text-gray-800'>
        <div className='border-t-2 border-gray-300 dark:border-gray-500 border-solid'></div>
        <div className='p-4'>
            <div className='mx-auto grid max-w-7xl grid-cols-2 gap-6 space-y-4 md:mx-2 md:grid-cols-2 '>
                <div className='mx-auto'>
                    <h5 className='mt-4 text-lg font-semibold'>
                       Quick Links
                    </h5>
                    <p>
                        <Link to='/'>About</Link>
                    </p>
                    <p>
                        <Link to='/'>Tools</Link>
                    </p>
                    <p>
                        <Link to='/'>Projects</Link>
                    </p>
                    <p>
                        <Link to='/'>Testimonials</Link>
                    </p>
                    <p>
                        <Link to='/'>Download Resume</Link>
                    </p>
                </div>

                <div className='mx-auto'>
                <h5 className='mb-1 text-lg font-semibold'>
                    Connect
                </h5>
                    <a href="https://www.ajibolasegun.hashnode.dev">
                        Blog
                    </a>
                    <a href="" className='mt-[1px] block'>
                        Schedule a Meet
                    </a>
                    <div className='flex gap-1 mt-1'>
                        <a href='https://www.twitter.com/iamsegunajibola'>
                            <FaTwitter size={25} className='text-blue-500' />
                        </a>
                        <a href='https://www.Linkedin.com/'>
                            <FaLinkedin className='text-blue-500' size={25} />
                        </a>
                        <a href='https://wwww.github.com/segunajibola'>
                            <FaGithub size={25} className='text-white dark:text-gray-800' />
                        </a>
                        <a href='https://wa.me/'>
                            <FaWhatsapp size={25} className='text-green-500' />
                        </a>
                        <a href='https://www.instagram.com/iamsegunajibola'>
                            <FaInstagram size={25} className='text-red-300' />
                        </a>
                        <a href='mailto:ajbl.segun@gmail.com'>
                            <HiOutlineMail size={30} className='-mt-[2px] text-gray-300' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    <p className='p-3 text-center'>
    Copyright &copy; {new Date().getFullYear()}. All right reserved.
    </p>
  </footer>
  )
}

export default Footer