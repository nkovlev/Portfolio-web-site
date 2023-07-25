import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Close } from '@mui/icons-material';
import me from '../images/me_logo.jpeg';
import Typed from 'typed.js';
import ModalInfo from './ModalInfo';

const AboutModal = ({ onHideHeader, onShowHeader }) => {
const typedRef = useRef(null);

useEffect(() => {
onHideHeader();
const options = {
strings: ['Junior', 'Frontend', 'Developer'],
typeSpeed: 150,
backSpeed: 40,
loop: true,
};
typedRef.current = new Typed('.typed-text', options);
return () => {
onShowHeader();
typedRef.current.destroy();
};
}, [onHideHeader, onShowHeader]);

return (
<div className="w-screen h-screen bg-black flex justify-center gap-5 pt-20">
  <div className="w-3/5 h-4/5 bg-neutral-800 rounded-md flex">
    <div className="w-1/3 h-full flex flex-col items-center gap-1 mt-10 static">
      <img src={me} alt="me" className="rounded-full w-32 h-32" />
      <h1 className="text-xl font-poppins font-bold text-white">
        Mykyta<span className="text-purple-700"> Kovlev</span>
      </h1>
      <p className="text-md font-semibold text-gray-400">
        I am <span className="typed-text text-white"></span>
      </p>
      <ModalInfo />
      <a href="../../public/myCV.pdf" download="Mykyta_Kovlev_CV.pdf"
        className="bg-purple-500 h-12 w-60 rounded-full text-white hover:bg-white hover:text-black mt-8 flex justify-center items-center">
        Download CV
      </a>
    </div>
    <div className="border-l border-dashed border-gray-700 h-full"></div>
    <div className="flex-1 flex flex-col items-center overflow-y-auto">
      <div className=" w-[500px]">
        <h1 className="text-xl font-poppins font-bold text-white mt-10 mb-4">
          About<span className="text-purple-700"> Me</span>
        </h1>
        <hr className="border-dashed border-t w-full border-gray-700 mb-4" />
        <p className='text-gray-400'>Howdy! My name is <span className='text-white'>Mykyta Kovlev</span>. I am a
          20-year-old Junior Front-end Developer from Ukraine. I am looking for a intership to improve my skills in
          JavaScript and React. I am excited about new opportunities and ready to make a positive impact in the field of
          web development.</p>
        <h1 className="text-xl font-poppins font-bold text-white mt-10 mb-4">
          Programming<span className="text-purple-700"> Skills</span>
        </h1>
        <hr className="border-dashed border-t w-full border-gray-700 mb-4" />
        <div className='mb-3'>
          <div className="flex justify-between mb-2">
            <p className='text-gray-400'>HTML</p>
            <p className='text-gray-400'>90%</p>
          </div>
          <div className="flex">
            <span className='w-[450px] h-1 bg-purple-700'></span>
            <span className='w-[50px] h-1 bg-gray-400'></span>
          </div>
        </div>
        <div className='mb-3'>
          <div className="flex justify-between mb-2">
            <p className='text-gray-400'>CSS</p>
            <p className='text-gray-400'>80%</p>
          </div>
          <div className="flex">
            <span className='w-[400px] h-1 bg-purple-700'></span>
            <span className='w-[100px] h-1 bg-gray-400'></span>
          </div>
        </div>
        <div className='mb-3'>
          <div className="flex justify-between mb-2">
            <p className='text-gray-400'>Tailwind CSS</p>
            <p className='text-gray-400'>50%</p>
          </div>
          <div className="flex">
            <span className='w-[250px] h-1 bg-purple-700'></span>
            <span className='w-[250px] h-1 bg-gray-400'></span>
          </div>
        </div>
        <div className='mb-3'>
          <div className="flex justify-between mb-2">
            <p className='text-gray-400'>JavaScript</p>
            <p className='text-gray-400'>50%</p>
          </div>
          <div className="flex">
            <span className='w-[250px] h-1 bg-purple-700'></span>
            <span className='w-[250px] h-1 bg-gray-400'></span>
          </div>
        </div>
        <div className='mb-3'>
          <div className="flex justify-between mb-2">
            <p className='text-gray-400'>React</p>
            <p className='text-gray-400'>40%</p>
          </div>
          <div className="flex">
            <span className='w-[200px] h-1 bg-purple-700'></span>
            <span className='w-[300px] h-1 bg-gray-400'></span>
          </div>
        </div>
        <h1 className="text-xl font-poppins font-bold text-white mt-10 mb-4">
          Language<span className="text-purple-700"> Skills</span>
        </h1>
        <hr className="border-dashed border-t w-full border-gray-700 mb-4" />
        <div className="flex gap-14">
          <div className="flex flex-col items-center gap-2">
            <div
              className="w-[120px] h-[120px] rounded-full border-2 border-purple-700 flex justify-center items-center text-gray-400 font-semibold">
              C2</div>
            <p className='text-gray-400'>Ukranian</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div
              className="w-[120px] h-[120px] rounded-full border-2 border-purple-700 flex justify-center items-center text-gray-400 font-semibold">
              A2</div>
            <p className='text-gray-400'>English</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div
              className="w-[120px] h-[120px] rounded-full border-2 border-purple-700 flex justify-center items-center text-gray-400 font-semibold">
              C2</div>
            <p className='text-gray-400'>Russian</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Link to={"/about"}> <Close className="fill-white w-8 h-8 top-0 border-2 rounded-md hover:rounded-full" />
  </Link>
</div>
);
};

export default AboutModal;