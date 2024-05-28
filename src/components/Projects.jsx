import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4" id="projects">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>
      <div className="">
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap  lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="w-full lg:w-1/4  "
            >
              <div className="group relative overflow-hidden border-1 border-white/50 rounded-xl w-[150px] h-[150px]">
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 "></div>
                <img
                  src={project.image}
                  width={150}
                  height={150}
                  alt={project.title}
                  className="mb-6 rounded group-hover:scale-125 transition-all"
                />
                <div className="absolute -bottom-full left-10 group-hover:bottom-20 transition-all duration-500 z-50">
                  <a href={project.link} target="_blank">
                    {" "}
                    <span className="text-gradient font-semibold cursor-pointer">
                      Visit Here
                    </span>
                  </a>
                </div>
              </div>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
