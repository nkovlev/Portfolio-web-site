import { useState } from 'react';
import logo from '../images/logo.svg';
import {IoMdClose} from 'react-icons/io'

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="absolute w-full flex items-center justify-between">
      <div className="flex items-center gap-4 ml-10">
        <img src={logo} alt="logo" className="w-16 h-16" />
        <h2 className="text-purple-700 text-2xl font-poppins font-extrabold">.Nick</h2>
      </div>
      <div className="relative mr-10" onClick={handleMenuToggle}>
        <div className="h-0.5 w-8 bg-white mb-1"></div>
        <div className="h-0.5 w-8 bg-white mb-1"></div>
        <div className="h-0.5 w-8 bg-white mb-1"></div>
      </div>
        {isOpen && (
          <div className="fixed top-0 right-0 h-screen w-1/3 bg-black shadow-lg z-10">
            <div className="absolute right-0 mt-5 mr-10 text-white" onClick={handleMenuToggle}>
              <IoMdClose className="w-8 h-8"/>
            </div>
            <ul className="py-2 px-4 space-y-2 text-white">
              <li>Menu Item 1</li>
              <li>Menu Item 2</li>
              <li>Menu Item 3</li>
              <li>Menu Item 4</li>
            </ul>
          </div>
        )}
    </header>
  );
}

export default Header;
