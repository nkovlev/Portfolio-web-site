import { motion, useAnimation } from 'framer-motion';
const ProjectCard = ({ logo, title }) => {
const controls = useAnimation();
const handleHover = (isHovered) => {
controls.start({ y: isHovered ? -15 : 60, opacity: isHovered ? 1 : 0 });
};
return (
<div className="w-[250px] h-[250px] relative overflow-hidden" onMouseEnter={()=> handleHover(true)}
    onMouseLeave={() => handleHover(false)}
    >
    <motion.div className="w-[250px] h-[250px] bg-purple-700 flex items-center justify-center"
        whileHover={{ scale: 1.1 }}>
        <motion.img src={logo} alt="netflix clone" className='w-[150px] h-[150px]' />
    </motion.div>
    <motion.div
        className="w-[150px] h-[60px] bg-white ml-5 rounded-md flex items-center justify-center absolute bottom-0 left-0 transform -translate-y-full opacity-0"
        initial={{ y: 30, opacity: 0 }} animate={controls} transition={{ duration: 0.3 }}>
        <p className='font-semibold'>{title}</p>
    </motion.div>
</div>
)
}

export default ProjectCard