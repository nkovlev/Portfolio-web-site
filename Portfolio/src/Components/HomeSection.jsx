import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import me from '../images/2023-06-20 18.21.35.png'
import {BsArrowDown} from 'react-icons/bs'

const HomeSection = () => {
const typedRef = useRef(null);

useEffect(() => {
    const options = {
        strings: ['Mykyta Kovlev','Junior', 'Frontend', 'Developer'],
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
<div className="w-screen h-screen flex flex-col justify-center items-center">
    <div className="w-screen h-screen flex flex-col justify-center items-center gap-5">
        <div className="w-40 h-40 bg-purple-700 rounded-full flex items-center justify-center">
            <img src={me} alt="me" className="w-36 h-36 rounded-full" />
        </div>
        <h1 className="text-white text-5xl font-poppins font-extrabold">
            Howdy, I am <span className="typed-text text-purple-700"></span>
        </h1>
        <p className="text-white text-xl">I am a Trainee / Junior Frontend Developer from <span className="text-yellow-400">Ukraine</span>.</p>
    </div>
    <div className="mb-10">
        <p className="text-white flex items-center gap-2 hover:text-purple-700"><BsArrowDown className="animate-bounce"/> Scroll Down</p>
    </div>
</div>
);
};

export default HomeSection;
