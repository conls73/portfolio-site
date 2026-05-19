import { useState } from 'react';
import '../styles/navigation.css';

export default function Navigation({ onExpandProjects }) {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    setIsOpen(false);
    
    // If the section might be hidden behind 'See More', expand it first
    if (['small-business', 'apps', 'games'].includes(id)) {
      if (onExpandProjects) {
        onExpandProjects();
      }
      
      // Wait for React to render the newly expanded sections
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <div className="nav-brand">
          <a href="#" onClick={() => scrollToSection('home')}>
            <img src="/logo.svg" alt="Conley Quillen" className="nav-logo" />
          </a>
        </div>

        <button
          className={`hamburger ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li>
            <a href="#small-business" onClick={() => scrollToSection('small-business')}>
              Small Business
            </a>
          </li>
          <li>
            <a href="#apps" onClick={() => scrollToSection('apps')}>
              Apps
            </a>
          </li>
          <li>
            <a href="#games" onClick={() => scrollToSection('games')}>
              Games
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => scrollToSection('contact')}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
