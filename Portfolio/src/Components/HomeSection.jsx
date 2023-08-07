import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HomeSection = () => {
const typedRef = useRef(null);

useEffect(() => {
    const options = {
        strings: ['Junior', 'Frontend', 'Developer'],
        typeSpeed: 150,
        backSpeed: 40,
        loop: true,
};

    typedRef.current = new Typed('.typed-text', options);

    return () => {
        typedRef.current.destroy();
    };
}, []);

return (
    <motion.div className="h-full mt-60 flex flex-col justify-center items-center gap-6 text-white" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }}>
        <h1 className="text-6xl font-poppins font-extrabold">
            Mykyta<span className='text-purple-700'> Kovlev</span>
        </h1>
        <p className="text-3xl font-semibold text-gray-400">
        I am <span className="typed-text text-white"></span>
        </p>
        <Link to={'/contacts'} className='mt-8 bg-purple-500 py-3 px-10 rounded-full text-white hover:bg-white hover:text-black'>Get in Touch</Link>
    </motion.div>
);
};

export default HomeSection;
