import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const HomeSection = () => {
const typedRef = useRef(null);

useEffect(() => {
    const options = {
        strings: ['Mykyta Kovlev','Junior', 'Frontend', 'Developer'],
        typeSpeed: 150,
        backSpeed: 100,
        loop: true,
    };

    typedRef.current = new Typed('.typed-text', options);

    return () => {
        typedRef.current.destroy();
    };
}, []);

return (
    <div className="w-screen h-screen">
        <div className="flex justify-center items-center w-full h-full">
            <h1 className="text-white text-5xl font-poppins font-extrabold">
                Hi, I am <span className="typed-text text-purple-700"></span>
            </h1>
        </div>
    </div>
);
};

export default HomeSection;
