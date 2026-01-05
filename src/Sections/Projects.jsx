import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../constants/motion';
import { projects } from '../constants/constants';
import Tilt from 'react-parallax-tilt';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      variants={textVariant(index * 0.2)}
      className="w-full sm:max-w-[400px] z-20"
    >
      <Tilt
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        scale={1.05}
        transitionSpeed={400}
        className="relative p-6 shadow-lg glass rounded-xl bg-[#3D2817]/80 border border-[#C97D60]/30 backdrop-blur-sm hover:border-[#D4A574]/50 transition-all"
      >
        <div className="block">
          {project.image && (
            <img
              src={project.image}
              alt={project.title}
              className="h-[200px] w-full object-cover rounded-lg mb-4"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          )}
          <h3 className="text-2xl font-semibold mb-3 text-textdark2 drop-shadow-xl">
            {project.title}
          </h3>
          <p className="text-textdark2 mb-4 text-sm leading-relaxed">
            {project.description}
          </p>
          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-[#C97D60]/20 text-[#D4A574] text-xs rounded-full border border-[#C97D60]/30"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-[#C97D60] hover:text-[#D4A574] text-sm font-medium"
            >
              View on GitHub →
            </a>
          )}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <motion.div
      variants={textVariant()}
      className="bg-[#2C1810] rounded-[50px] p-8 sm:p-20 min-h-screen relative overflow-hidden"
    >
      <motion.h1
        variants={textVariant(0.2)}
        className="text-textdark1 text-5xl sm:text-8xl font-semibold text-center p-8 z-20 relative"
      >
        PROJECTS
      </motion.h1>

      {/* Background decorative elements */}
      <motion.div
        variants={textVariant(1.3)}
        className="bg-gradient-to-b from-[#D4A574] to-transparent rounded-full w-[15rem] sm:w-[35rem] h-[15rem] sm:h-[35rem] absolute top-[25rem] sm:bottom-20 -right-10 sm:-right-10 z-10"
      ></motion.div>
      <motion.div
        variants={textVariant(1.5)}
        className="bg-gradient-to-b from-[#7A8471] to-transparent rounded-full w-[25rem] sm:w-[40rem] h-[25rem] sm:h-[40rem] absolute top-[20rem] sm:top-20 -right-28 sm:-right-20 z-10"
      ></motion.div>
      <motion.div
        variants={textVariant(1.7)}
        className="bg-gradient-to-b from-[#7A8471] to-transparent rounded-full w-[20rem] sm:w-[50rem] h-[20rem] sm:h-[50rem] absolute bottom-[35rem] sm:bottom-36 -left-32 sm:-left-44 z-10"
      ></motion.div>
      <motion.div
        variants={textVariant(1.9)}
        className="bg-gradient-to-b from-[#C9A9A6] to-transparent rounded-full w-[15rem] sm:w-[35rem] h-[15rem] sm:h-[35rem] absolute bottom-[35rem] sm:bottom-2 -left-28 sm:-left-20 z-10"
      ></motion.div>

      {/* Projects Grid */}
      <div className="flex flex-wrap justify-center gap-8 sm:gap-12 z-20 relative mt-8">
        {projects && projects.length > 0 ? (
          projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))
        ) : (
          <p className="text-textdark2 text-xl">No projects available</p>
        )}
      </div>
    </motion.div>
  );
};

export default SectionWrapper(Projects, 'projects');

