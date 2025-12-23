import React, { useState, useEffect } from 'react';
import TopBar from './TopBar';
import NavBar from './NavBar';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  // Scroll olayını dinle
  useEffect(() => {
    const handleScroll = () => {
      // 50px aşağı inince 'scrolled' true olsun
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="header-wrapper">
      {/* TopBar sadece en tepedeyken görünsün, aşağı inince navbar onu kapatsın diye dışarıda */}
      <TopBar />
      
      {/* Scrolled bilgisini NavBar'a gönderiyoruz */}
      <NavBar scrolled={scrolled} />
    </div>
  );
};

export default Header;