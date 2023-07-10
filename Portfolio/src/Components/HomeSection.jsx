import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

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
    <div className="h-screen flex flex-col justify-center items-center gap-6 text-white">
        <h1 className="text-5xl font-poppins font-extrabold">
            Howdy, I am <span className='text-purple-700'>Mykyta Kovlev</span>
        </h1>
        <p className="text-3xl font-semibold text-yellow-300">
            Ukranian <span className="typed-text text-purple-700"></span>.
        </p>
    </div>
);
};

export default HomeSection;
