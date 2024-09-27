import me from '../images/me.jpg'
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const AboutSection = () => {
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
    <motion.div className="h-full mt-40 flex flex-col justify-center items-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }}>
        <div className="h-96 w-3/5 flex gap-20">
            <div className="w-2/3">
                <img src={me} alt="me" className='w-72'/>
            </div>
            <div className="w-2/3">
                <h1 className="text-white text-4xl font-poppins font-extrabold mb-6"> Mykyta<span className='text-purple-700'> Kovlev</span> </h1>
                <p className='text-2xl font-poppins font-normal text-white mb-6'><span className="typed-text text-white"></span></p>
                <hr className="border-dashed border-t border-gray-700" />
                <p className='text-gray-400 font-normal pt-6 leading-loose mb-8'>My name is <span className='text-white'>Mykyta Kovlev.</span> I am a Junior Frontend Developer based in <span className='text-yellow-400'>Ukraine</span>. I am looking for a intership to improve my skills in JS, React.
                I am always eager to expand my knowledge and explore new technologies.
                </p>
                <Link to={'/info'} className='bg-purple-500 py-3 px-10 rounded-full text-white hover:bg-white hover:text-black'>Learn more</Link>
            </div>
        </div>
    </motion.div>
    );
};

export default AboutSection