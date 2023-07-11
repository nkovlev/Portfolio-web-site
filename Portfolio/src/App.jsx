import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import bg from './images/bg.jpg';

import HomeSection from './Components/HomeSection';
import AboutSection from './Components/AboutSection';
import ProjectsSection from './Components/ProjectsSection';
import ContactsSection from './Components/ContactsSection';
import Header from './Components/Header';
import AboutModal from './Components/AboutModal';

function App() {
  return (
    <Router>
      <div style={{ backgroundImage: `url(${bg})` }}>
        <Header/>
        <Routes>
          <Route path="/" element={<HomeSection />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/info" element={<AboutModal />} />
          <Route path="/projects" element={<ProjectsSection />} />
          <Route path="/contacts" element={<ContactsSection />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
