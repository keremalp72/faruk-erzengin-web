import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Link'i import etmeyi unutma
import { FaBars, FaTimes } from 'react-icons/fa';
import './Header.css'; // Eğer dosya adın NavBar.css ise burayı ona göre düzelt

const Header = () => {
  // --- EKSİK OLAN KISIM BURASIYDI ---
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll olayını dinle (Header rengi değişimi için)
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

  // Menüyü aç/kapa fonksiyonu
  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        
        {/* Logo - Ana Sayfaya yönlendirir */}
        <Link to="/" className="logo" onClick={() => setNavOpen(false)}>
          Prof. Dr. <span className="gold-text">Faruk Erzengin</span>
        </Link>

        {/* Mobil Menü İkonu */}
        <div className="menu-icon" onClick={toggleNav}>
          {navOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Navigasyon Linkleri */}
        <nav className={navOpen ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-links">
            <li>
              <Link to="/" onClick={() => setNavOpen(false)}>Ana Sayfa</Link>
            </li>
            <li>
              {/* Burası yeni sayfaya gidiyor */}
              <Link to="/hakkimda" onClick={() => setNavOpen(false)}>Hakkımda</Link>
            </li>
            <li>
              <Link to="/" onClick={() => setNavOpen(false)}>Tedaviler</Link>
            </li>
            <li>
              <Link to="/" onClick={() => setNavOpen(false)}>Yorumlar</Link>
            </li>
            <li>
              <Link to="/" onClick={() => setNavOpen(false)}>İletişim</Link>
            </li>
          </ul>
        </nav>

      </div>
    </header>
  );
};

export default Header;