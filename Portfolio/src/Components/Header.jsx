import { useState } from 'react';
import logo from '../images/logo.svg';
import { IoMdClose } from 'react-icons/io';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ['Home', 'About', 'Projects', 'Contacts'];
  const [selectedItem, setSelectedItem] = useState('Home');

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
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
      <div
        className={`fixed top-0 right-0 h-screen w-1/3 bg-zinc-900 shadow-lg z-10 ${ isOpen ? 'menu-open' : 'menu-closed' }`}>
        <div className="absolute right-0 mt-5 mr-10 text-white" onClick={handleMenuToggle}>
          <IoMdClose className="w-8 h-8" />
        </div>
        <ul className="pl-16 pt-40 space-y-6 text-white">
          {menuItems.map((item, index) => (
            <li
              key={index}
              onClick={() => handleMenuItemClick(item)}
              className={`font-semibold text-3xl hover:text-white ${
                selectedItem === item ? 'text-white' : 'text-gray-400'
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Header;
