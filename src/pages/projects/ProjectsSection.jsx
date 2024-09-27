/* eslint-disable react/prop-types */
import ProjectCard from './components/ProjectCard';
import { motion } from 'framer-motion';

const ProjetsSection = ({projects}) => {
  return (
    <motion.div className="h-full mt-28 flex flex-col justify-center items-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }}>
      <div className="h-96 w-3/5">
        <h1 className="text-white font-poppins font-bold text-3xl mb-8">
          My <span className="text-purple-700">Portfolio</span>
        </h1>
        <hr className="border-dashed border-t border-gray-700 mb-10" />
        <div className="flex gap-14 flex-col lg:flex-row z-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} logo={project.logo} title={project.title} />
          ))}
        </div>
        
      </div>
    </motion.div>
  );
};

export default ProjetsSection;