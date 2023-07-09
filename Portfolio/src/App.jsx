import { useState } from 'react';
import logo from './images/logo.svg';
import bg from './images/bg.jpg';
import { Link } from 'react-scroll';

import HomeSection from './Components/HomeSection';
import AboutSection from './Components/AboutSection';
import ProjectsSection from './Components/ProjectsSection';
import ContactsSection from './Components/ContactsSection';

function App() {
  const menuItems = [
    { name: 'Home', component: HomeSection },
    { name: 'About', component: AboutSection },
    { name: 'Projects', component: ProjectsSection },
    { name: 'Contacts', component: ContactsSection },
  ];

  const [selectedItem, setSelectedItem] = useState('Home');

  const handleMenuItemClick = (item) => {
    setSelectedItem(item);
  };

  const SelectedComponent = menuItems.find((menuItem) => menuItem.name === selectedItem)?.component;

  return (
    <>
      <header className="fixed top-0 w-full flex items-center justify-around z-10 mt-10" style={{ backgroundImage: `url(${bg})`}}>
        <div className="flex items-center gap-4">
          <img src={logo} alt="logo" className="w-10 h-10" />
          <h2 className="text-purple-700 text-xl font-poppins font-extrabold">.Nick</h2>
        </div>
        <ul className=" text-white flex items-center gap-5">
          {menuItems.map((menuItem, index) => (
            <li
              key={index}
              onClick={() => handleMenuItemClick(menuItem.name)}
              className={`font-medium text-lg hover:text-white`}
            >
              <Link
                to={menuItem.name.toLowerCase()}
                onClick={() => handleMenuItemClick(menuItem.name)}
                className={selectedItem === menuItem.name ? 'text-purple-700' : 'text-white'}
              >
                {menuItem.name}
              </Link>
            </li>
          ))}
        </ul>
      </header>
      {SelectedComponent ? <SelectedComponent /> : null}
    </>
  );
}

export default App;
