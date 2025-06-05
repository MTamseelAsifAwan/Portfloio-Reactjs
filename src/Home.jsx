import React, { useRef, useState } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Projects from './Projects';
import Experience from './Experience';

const Home = () => {
  const [section, setSection] = useState('home');
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);

  const handleNavClick = (sectionName) => {
    setSection(sectionName);
    let ref = null;
    if (sectionName === 'home') ref = homeRef;
    else if (sectionName === 'projects') ref = projectsRef;
    else if (sectionName === 'experience') ref = experienceRef;
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-black min-h-screen flex flex-col overflow-x-hidden">
      <Navbar onNavClick={handleNavClick} currentSection={section} />
      <div ref={homeRef} id="home">
        <Hero />
      </div>
      <div ref={projectsRef} id="projects">
        <Projects />
      </div>
      <div ref={experienceRef} id="experience">
        <Experience />
      </div>
    </div>
  );
};

export default Home;
