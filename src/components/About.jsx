import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { front } from "../assets";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4" id="about">
      <h1 className="my-20 text-center text-4xl">
        About<span className="text-neutral-500"> Me</span>
      </h1>
      <div className="flex flex-wrap ">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center hidden lg:block justify-center ">
            <img src={front} alt="about" className="w-[80%] rounded-2xl" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex font-light flex-col justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 100 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex gap-4 sm:justify-center lg:justify-start mr-10  mb-5 cursor-pointer text-xl"
            >
              <a
                href="https://www.instagram.com/imuzamil_23?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="blank"
              >
                {" "}
                <FaInstagram className="text-pink-800" />
              </a>
              <a href="https://github.com/Muzamil223" target="blank">
                {" "}
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/muzamil-shahbaz-532a582ba/"
                target="blank"
              >
                <FaLinkedin className="text-sky-800" />
              </a>
              <FaTwitter className="text-" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
