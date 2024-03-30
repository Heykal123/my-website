import React from 'react';
import ReactDOM from 'react-dom/client';
import './Style.css';
import Home from './Page/Home';
import AboutPage from './Page/AboutPage';
import ContactPage from './Page/ContactPage';
import SkillsPage from './Page/SkillsPage';
import ProjectPage from './Page/ProjectPage';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <Home/> 
       <AboutPage/>
       <SkillsPage/>
       <ProjectPage/>
       <ContactPage/>
    
  </React.StrictMode>,
)
