import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Eklendi
import TopBar from './TopBar';
import NavBar from './NavBar';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation(); // Eklendi

  // Ana sayfada mıyız kontrolü
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
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
    // Ana sayfa değilse 'other-page-mode' sınıfını ekle
    <div className={`header-wrapper ${!isHomePage ? 'other-page-mode' : ''}`}>
      <TopBar />
      {/* NavBar'a sadece scroll bilgisini gönderiyoruz */}
      <NavBar scrolled={scrolled} />
    </div>
  );
};

export default Header;