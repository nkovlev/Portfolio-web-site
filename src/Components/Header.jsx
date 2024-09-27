import logo from '../images/logo.svg';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contacts', path: '/contacts' },
  ];

  const [selectedItem, setSelectedItem] = useState('Home');

  useEffect(() => {
    const storedItem = localStorage.getItem('selectedItem');
    if (storedItem && menuItems.some(item => item.name === storedItem)) {
      setSelectedItem(storedItem);
    }
  }, []);

  const handleMenuItemClick = (item) => {
    setSelectedItem(item);
    localStorage.setItem('selectedItem', item);
  };

  return (
    <header className="relative top-0 w-full flex items-center justify-center mt-10">
      <div className="flex w-3/5 justify-between">
        <div className="flex items-center gap-4">
          <img src={logo} alt="logo" className="w-10 h-10" />
          <h2 className="text-purple-700 text-xl font-poppins font-extrabold">.Nick</h2>
        </div>
        <ul className="text-white flex items-center gap-5">
          {menuItems.map((menuItem, index) => (
            <li key={index} onClick={() => handleMenuItemClick(menuItem.name)}
              className={`font-medium text-lg hover:text-purple-700 cursor-pointer`}
            >
              <Link to={menuItem.path} onClick={() => handleMenuItemClick(menuItem.name)}
                className={selectedItem === menuItem.name ? 'text-purple-700' : ''}
              >
                {menuItem.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Header;
