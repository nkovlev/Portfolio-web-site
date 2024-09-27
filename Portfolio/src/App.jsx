import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import bg from './images/bg.jpg';
import HomeSection from './Components/HomeSection';
import AboutSection from './Components/AboutSection';
import ProjectsSection from './Components/ProjectsSection';
import ContactsSection from './Components/ContactsSection';
import Header from './Components/Header';
import AboutModal from './Components/AboutModal';
import ProjectModal from './Components/ProjectModal';
import BattleHome from './images/battle app home.png'

import netflixLogo from './images/Netflix.png';
import battleLogo from './images/Battle.png'
import neflixHome from './images/NetflixHomePage.jpg'

function App() {
  const [showHeader, setShowHeader] = useState(true);
  const projects = [
    { 
      logo: netflixLogo,
      title: 'Netflix Clone',
      home: neflixHome,
      description: 'This app is a clone of the official Netflix website that was created for educational purposes. The purpose of this project is to improve my skills in React and learn new technologies that will help me build web applications.',
      technologies:['JavaScript','React','React Router','Tailwind','Firebase','Axios','TMDB API','Formik']
    },
    { 
      logo: battleLogo, 
      title: 'Battle App',
      home: BattleHome,
    },
  ];
  return (
    <Router>
      <div style={{ backgroundImage: `url(${bg})` }}>
        {showHeader && <Header />}
        <Routes>
          <Route path="/" element={<HomeSection />} />
          <Route path="/about" element={<AboutSection />} />
          <Route
            path="/info"
            element={<AboutModal onHideHeader={() => setShowHeader(false)} onShowHeader={() => setShowHeader(true)} prevPath={location.pathname}/>}
          />
          <Route path="/projects" element={<ProjectsSection projects={projects}/>} />
          <Route path="/contacts" element={<ContactsSection />} />
          <Route path="/project/:title?" element={<ProjectModal projects={projects} onHideHeader={() => setShowHeader(false)} onShowHeader={() => setShowHeader(true)} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
