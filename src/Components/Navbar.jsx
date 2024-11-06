import React, { useState, useEffect } from 'react';
import Logo from '../assets/Logo.png'

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "certifications", "projects", "contact"];
      sections.forEach((section) => {
        const sectionElement = document.getElementById(section);
        if (sectionElement) {
          const rect = sectionElement.getBoundingClientRect();
          if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <div className='fixed bg-black top-0 left-0 w-full flex justify-between items-center p-4'>
      <img className='w-8 h-8' src={Logo} alt="logo" />
      <ul className='flex space-x-8 pr-8 text-white'>
        {["home", "about", "certifications", "projects", "contact"].map((section) => (
          <li key={section}>
            <button
              onClick={() => scrollToSection(section)}
              className={activeSection === section ? 'underline underline-offset-4 text-white' : ''}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
