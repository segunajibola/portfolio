import {
    FaWhatsapp,
    FaCheck,
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

const ThankYou = () => {
  return (
    <div className="w-full text-center text-gray-300 bg-[#0a192f] py-[100px] px-5 md:p-12 dark:bg-gray-300 dark:text-gray-800 mt-10">
        <FaCheck className='text-center mx-auto text-[150px]' />
      <h2 className="text-2xl font-bold">Thanks for submitting the form. 🙏</h2>
      <p className="mt-10 text-base font-bold">
        Click
            <Link to="/" className="text-blue-500 underline mx-1">
                here
            </Link>
        to go back to the homepage.
      </p>
    </div>
  )
}

export default ThankYou