import React, { useState } from 'react';

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hamburger-menu">
      <button onClick={toggleMenu}>
        {isOpen ? <span>&times;</span> : <span>&equiv;</span>}
      </button>
      {isOpen && (
        <ul className="menu">
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#projects">Projects</a></li>
        </ul>
      )}

          <ul className="menu-desktop">
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#projects">Projects</a></li>
        </ul>
      
    </div>
  );
}

export default HamburgerMenu;
