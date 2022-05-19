import {
    FaWhatsapp,
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaTwitter,
    FaStackOverflow,
    FaFacebook,
    FaDev,
    FaCodepen,
    FaArrowUp,
  } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { HiOutlineMail } from 'react-icons/hi';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
  return (
    <footer className='w-full text-center text-gray-300 bg-[#0a192f] md:mx-0 dark:bg-gray-300 dark:text-gray-800'>
        <div className='border-t-2 border-gray-300 dark:border-gray-500 border-solid'></div>
        <div className='p-4'>
            <div className='mx-auto grid max-w-7xl grid-cols-2 gap-6 space-y-4 md:mx-2 md:grid-cols-2 '>
                <div className='mx-auto'>
                    <h5 className='mt-4 text-lg font-semibold'>
                       Quick Links
                    </h5>
                    <p>
                        <HashLink className="cursor-pointer" to='/#about'>
                            Tools
                        </HashLink>
                    </p>
                    <p>
                        <HashLink className="cursor-pointer" to='/#tools'>
                            About
                        </HashLink>
                    </p>
                    <p>
                        <HashLink className="cursor-pointer" to='/#projects'>
                            Projects
                        </HashLink>
                    </p>
                    <p>
                        <HashLink className="cursor-pointer" to='/#testimonials'>
                            Testimonials
                        </HashLink>
                    </p>
                    <p>
                        <a href='https://drive.google.com/file/d/1WeurDP0scU81V7QawRa7VlugkPBZfQta/view?usp=sharing'>Download Resume</a>
                    </p>
                </div>

                <div className='mx-auto'>
                <h5 className='mb-1 text-lg font-semibold'>
                    Connect
                </h5>
                    <a href="https://blog.segunajibola.com">
                        Blog
                    </a>
                    <a href="https://calendly.com/segunajibola/30min" className='mt-[1px] block'>
                        Schedule a Meeting
                    </a>
                    <div className='flex gap-1 mt-2'>
                        <a href='https://www.twitter.com/iamsegunajibola'>
                            <FaTwitter size={25} className='text-blue-500' />
                        </a>
                        <a href='https://www.linkedin.com/in/segunajibola/'>
                            <FaLinkedin className='text-blue-500' size={25} />
                        </a>
                        <a href='https://www.github.com/segunajibola'>
                            <FaGithub size={25} className='text-white dark:text-gray-800' />
                        </a>
                        <a href='https://wa.me/'>
                            <FaWhatsapp size={25} className='text-green-500' />
                        </a>
                        <a href='https://www.facebook.com/ajibola.segunemmanuel.com'>
                            <FaFacebook size={23} className='text-blue-300' />
                        </a>
                    </div>
                    <div className='flex gap-1 mt-2'>
                        <a href='https://www.instagram.com/iamsegunajibola'>
                            <FaInstagram size={25} className='text-red-300' />
                        </a>
                        <a href='mailto:ajbl.segun@gmail.com'>
                            <HiOutlineMail size={30} className='-mt-[2px] text-gray-300' />
                        </a>
                        <a href='https://codepen.io/iamsegunajibola'>
                            <FaCodepen size={26} className='mt-[1px] text-gray-600' />
                        </a>
                        <a href='https://stackoverflow.com/users/15411958/segunajibola'>
                            <FaStackOverflow size={27} className='text-yellow-300' />
                        </a>
                        <a href='https://dev.to/iamsegunajibola'>
                            <FaDev size={26} className='mt-[2px] text-gray-500' />
                        </a>
                    </div>
                </div>
            </div>
            <p className='text-lg  font-medium tracing-wider mt-2.5 mb-2'>Built with <span class="text-red-700 text-2xl">🧡</span> by Segun Ajibola.</p>
            <Link to="/" className="flex justify-center">
                <button className='text-gray-100 border-2 hover:text-gray-800 hover:bg-gray-100 hover:border-gray-200 px-4 py-2 md:my-2 dark:text-gray-900 dark:border-gray-500 dark:hover:bg-gray-300 dark:hover:border-gray-800' onClick={() => window.scrollTo(0, 0)}>
                Back to Top <FaArrowUp className='inline'/></button>
            </Link>
        </div>
    <p className='p-2 '>
    Copyright &copy; {new Date().getFullYear()}. All right reserved.
    </p>
  </footer>
  )
}

export default Footer