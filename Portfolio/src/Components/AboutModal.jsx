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
        <ModalInfo/>
        <a
            href="../../public/myCV.pdf"
            download="Mykyta_Kovlev_CV.pdf"
            className="bg-purple-500 h-12 w-60 rounded-full text-white hover:bg-white hover:text-black mt-8 flex justify-center items-center"
        >
        Download CV
        </a>
        </div>
        <div className="border-l border-dashed border-gray-700 h-full"></div>
        <div className="flex-1">
          <div className=""></div>
        </div>
      </div>

      <Link to={"/about"}>
        <Close className="fill-white w-8 h-8 top-0 border-2 rounded-md hover:rounded-full" />
      </Link>
    </div>
  );
};

export default AboutModal;
