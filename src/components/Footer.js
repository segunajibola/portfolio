import {
    FaWhatsapp,
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaTwitter,
  } from 'react-icons/fa';
  import { Link } from 'react-router-dom';
  import { HashLink } from 'react-router-hash-link';

const Footer = () => {
  return (
    <footer className='w-full text-gray-300 bg-[#0a192f] md:mx-0 dark:bg-gray-300 dark:text-gray-800'>
        <div className='border-t-2 border-gray-300 dark:border-gray-500 border-solid'></div>
        <div className='p-4'>
            <div className='mx-auto grid max-w-7xl grid-cols-2 gap-6 space-y-4 md:mx-2 md:grid-cols-4 '>
                <div>
                    <h5 className='mt-4 text-lg font-semibold'>
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
                <h5 className='mb-1 text-lg font-semibold'>
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
                <h5 className='mb-1 text-lg font-semibold'>
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
                <h5 className='mb-1 text-lg font-semibold'>
                    Connect
                </h5>
                <div className='flex gap-1'>
                    <Link to='https://www.twitter.com/iamsegunajibola'>
                        <FaTwitter size={25} className='text-blue-500' />
                    </Link>
                    <Link to='https://www.linkedin.com/'>
                        <FaLinkedin className='text-blue-500' size={25} />
                    </Link>
                    <Link to='https://wwww.github.com/segunajibola'>
                        <FaGithub size={25} className='text-white dark:text-gray-800' />
                    </Link>
                    <Link to='https://wa.me/'>
                        <FaWhatsapp size={25} className='text-green-500' />
                    </Link>
                    <Link to='https://www.instagram.com/iamsegunajibola'>
                        <FaInstagram size={25} className='text-red-300' />
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