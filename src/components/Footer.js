import React from 'react'
import {
    FaWhatsapp,
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaTwitter,
  } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className='w-full text-gray-300 bg-[#0a192f] md:mx-0'>
        <hr />
        <div className='p-4'>
            <div className='mx-auto grid max-w-7xl grid-cols-2 gap-6 space-y-4 md:mx-2 md:grid-cols-4 '>
                <div>
                <h5 className='mt-4 text-lg font-semibold dark:text-gray-200'>
                    Company
                </h5>
                <p>
                    <Link to='/'>About</Link>
                </p>
                <p>
                    <Link to='/'>Awards</Link>
                </p>
                <p>
                    <Link to='/'>Contact us</Link>
                </p>
                <p>
                    <Link to='/'>Bus Terminals</Link>
                </p>
                </div>
                <div>
                <h5 className='mb-1 text-lg font-semibold dark:text-gray-200'>
                    Exerience
                </h5>
                <p>
                    <Link to='/'>Tour Moments</Link>
                </p>
                <p>
                    <Link to='/'>Academy</Link>
                </p>
                <p>
                    <Link to='/'>Safety</Link>
                </p>
                <p>
                    <Link to='/'>FAQs</Link>
                </p>
                </div>
                <div>
                <h5 className='mb-1 text-lg font-semibold dark:text-gray-200'>
                    Terms
                </h5>
                <p>
                    <Link to='/'>Privacy Policy</Link>
                </p>
                <p>
                    <Link to='/'>Terms & Condition</Link>
                </p>
                </div>
                <div>
                <h5 className='mb-1 text-lg font-semibold dark:text-gray-200'>
                    Connect
                </h5>
                <div className='flex gap-3'>
                    <Link to='https://www.twitter.com/iamsegunajibola'>
                        <FaTwitter size={30} className='text-blue-500' />
                    </Link>
                    <Link to='https://www.linkedin.com/'>
                        <FaLinkedin className='text-blue-500' size={30} />
                    </Link>
                    <Link to='https://wwww.github.com/segunajibola'>
                        <FaGithub size={30} className='text-white' />
                    </Link>
                    <Link to='https://wa.me/'>
                        <FaWhatsapp size={30} className='text-green-500' />
                    </Link>
                    <Link to='https://www.instagram.com/iamsegunajibola'>
                        <FaInstagram size={30} className='text-red-300' />
                    </Link>
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