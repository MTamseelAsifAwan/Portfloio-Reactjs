import React, { useState } from 'react';
import logo from "./signature.png"; // Adjust the path as necessary

const Navbar = ({ onNavClick, currentSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#222222]">
      <div className="flex items-center justify-between p-4">
        {/* Logo always on the left */}
        <a>
          <img src={logo} alt="Logo" className="h-10 inline-block" />
        </a>
        {/* Hamburger for mobile */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
        {/* Desktop menu */}
        <ul className="hidden md:flex flex-row gap-8 items-center text-xl ml-auto">
          <li className={`text-white ${currentSection === 'home' ? 'font-bold underline' : ''}`}>
            <a
              href="#"
              className="hover:text-gray-400"
              onClick={() => onNavClick('home')}
            >
              Home
            </a>
          </li>
          <li className={`text-white ${currentSection === 'projects' ? 'font-bold underline' : ''}`}>
            <a
              href="#"
              className="hover:text-gray-400"
              onClick={() => onNavClick('projects')}
            >
              Project
            </a>
          </li>
          <li className={`text-white ${currentSection === 'experience' ? 'font-bold underline' : ''}`}>
            <a
              href="#"
              className="hover:text-gray-400"
              onClick={() => onNavClick('experience')}
            >
              Experience
            </a>
          </li>
        </ul>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col bg-[#222222] text-xl px-4 pb-4">
          <li className={`text-white py-2 ${currentSection === 'home' ? 'font-bold underline' : ''}`}>
            <a
              href="#"
              className="hover:text-gray-400"
              onClick={() => { onNavClick('home'); setMenuOpen(false); }}
            >
              Home
            </a>
          </li>
          <li className={`text-white py-2 ${currentSection === 'projects' ? 'font-bold underline' : ''}`}>
            <a
              href="#"
              className="hover:text-gray-400"
              onClick={() => { onNavClick('projects'); setMenuOpen(false); }}
            >
              Project
            </a>
          </li>
          <li className={`text-white py-2 ${currentSection === 'experience' ? 'font-bold underline' : ''}`}>
            <a
              href="#"
              className="hover:text-gray-400"
              onClick={() => { onNavClick('experience'); setMenuOpen(false); }}
            >
              Experience
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;