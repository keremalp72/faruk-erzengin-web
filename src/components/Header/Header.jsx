import React, { useState } from 'react';
import TopBar from './TopBar';
import NavBar from './NavBar';
import MobileMenu from './MobileMenu'; // Yeni bileşeni import ettik
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header-wrapper">
      <TopBar />
      <NavBar toggleMenu={toggleMenu} />
      
      {/* MobileMenu Bileşeni */}
      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </header>
  );
};

export default Header;