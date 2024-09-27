/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import { Close } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProjectModal = ({ onHideHeader, onShowHeader, projects }) => {
    const { title } = useParams();
    const selectedProject = projects.find((project) => project.title === title);

    useEffect(() => {
        onHideHeader();
        return () => {
            onShowHeader();
        };
    }, [onHideHeader, onShowHeader]);

    return (
        <motion.div className="w-screen h-screen flex justify-center gap-5 pt-20 z-100" initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }}>
            <div className="w-3/5 h-4/5 bg-neutral-800 rounded-md overflow-scroll">
                <div className="flex flex-col items-center mt-14">
                    <img src={selectedProject.home} alt="home" className='w-5/6' />
                </div>
                <div className="ml-16">
                    <div className=" text-white font-poppins font-semibold text-3xl mt-3">
                        {selectedProject.title}
                    </div>
                    <div className="text-white text-md max-w-2xl font-poppins font-medium mt-3">
                        {selectedProject.description}
                    </div>
                    <ul className="">
                        {selectedProject.technologies.map((tech) => (
                            <li className='text-white' key="id">{tech}</li>
                        ))}
                    </ul>
                </div>
            </div>
            
            <Link to={"/projects"}>
                <Close className="fill-white w-8 h-8 top-0 border-2 rounded-md hover:rounded-full" />
            </Link>
        </motion.div>
    )
}

export default ProjectModal;
