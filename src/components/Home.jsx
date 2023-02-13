import profileImg from "../assets/newPr.png";
import {
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import About from "./About";
import Tools from "./Tools";
import Testimonials from "./Testimonials";
import HighlightProjects from "./HighlightProjects";
import Contact from "./Contact";
import { HashLink } from "react-router-hash-link";

const Home = () => {
  return (
    <div id="home" className="w-full bg-[#0a192f] dark:bg-gray-100 z-10">
      {/* Container */}
      <div className="relative md:flex flex-row justify-between md:pt-40  pt-24 px-1 md:px-16 max-w-8xl mx-auto">
        <div className="max-w-[950px] px-4 flex flex-col justify-center ">
          <p className="text-yellow-600 text-2xl dark:text-gray-800">
            Hi 👋, my name is
          </p>
          <h1 className="md:text-4xl text-5xl mb-4 font-bold text-[#ccd6f6] dark:text-gray-800">
            Segun Ajibola.
          </h1>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#8892b0] dark:text-gray-800">
            I'm a front-end developer, technical writer & open source
            contributor.
          </h2>
          <p className="text-[#8892b0] py-4 max-w-[700px] dark:text-gray-700">
            I'm focused on building responsive web apps for creatives and small
            businesses trying to scale.
          </p>
          <div className="flex w-full">
            <button className="text-white text-xs border-2 border-gray-600 px-2 py-2 my-2 flex items-center hover:bg-gray-700 hover:border-gray-300 dark:text-gray-800 dark:hover:text-gray-100 dark:hover:bg-gray-500 dark:hover:border-gray-900">
              <HashLink to="/#projects" className="cursor-pointer">
                View Projects
              </HashLink>
            </button>
            <div class="lg:hidden inline-flex text-2xl space-x-3 ml-8 mt-4">
              <a href="https://www.twitter.com/iamsegunajibola">
                <FaTwitter size={30} className="text-blue-500" />
              </a>
              <a href="https://www.instagram.com/iamsegunajibola">
                <FaInstagram size={30} className="text-red-300" />
              </a>
              <a href="https://www.github.com/segunajibola">
                <FaGithub size={30} className="text-white dark:text-gray-800" />
              </a>
              <a href="https://wa.me/2348105729893">
                <FaWhatsapp size={30} className="text-green-500" />
              </a>
              <a href="https://www.linkedin.com/in/segunajibola/">
                <FaLinkedin className="text-blue-500" size={30} />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-shrink-0 justify-center sp:pb-0 md:pb-0 items-center">
          <img
            src="https://avatars.githubusercontent.com/u/74687658?v=4"
            alt="Profile Image"
            className="rounded-full w-80 h-80 m-4"
          />
        </div>
      </div>

      <About />
      <Tools />
      <HighlightProjects />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;
