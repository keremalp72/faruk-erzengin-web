// 1. DİKKAT: 'useEffect' buraya eklendi
import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavBar = ({ scrolled }) => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => setNavOpen(!navOpen);
  const closeNav = () => setNavOpen(false);

// Bu kısmı NavBar.js içindeki mevcut useEffect ile değiştir
useEffect(() => {
  if (navOpen) {
    // Menü açıkken: Hem body hem html kilitlenmeli
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed'; // Mobilde kaymayı %100 durdurur
    document.body.style.width = '100%';
  } else {
    // Menü kapalıyken: Her şeyi eski haline getir
    document.body.style.overflow = 'unset';
    document.body.style.position = 'static';
    document.body.style.width = 'auto';
  }
  
  // Temizlik (Component unmount olursa kilidi aç)
  return () => {
    document.body.style.overflow = 'unset';
    document.body.style.position = 'static';
  };
}, [navOpen]);
  // ----------------------------------------------------

  const stickyClass = scrolled ? 'sticky' : '';

  return (
    <>
      <div 
        className={`nav-overlay ${navOpen ? 'active' : ''}`} 
        onClick={closeNav}
      ></div>

      <header className={`main-header ${stickyClass}`}>
         <div className="container header-container">
            {/* Logo */}
            <Link to="/" className="logo" onClick={closeNav}>
              Prof. Dr. <span className="gold-text">Faruk Erzengin</span>
            </Link>
            
            {/* Mobil Menü İkonu */}
            <div className="menu-icon" onClick={toggleNav}><FaBars /></div>

            {/* Menü Linkleri */}
            <nav className={`nav-menu ${navOpen ? 'active' : ''}`}>
               <div className="mobile-menu-head">
                 <span className="mobile-menu-title">Menü</span>
                 <div className="close-icon" onClick={closeNav}><FaTimes /></div>
               </div>
               
               <ul className="nav-links">
                 <li><NavLink to="/" className="nav-link" onClick={closeNav}>ANA SAYFA</NavLink></li>
                 <li><NavLink to="/hakkinda" className="nav-link" onClick={closeNav}>HAKKINDA</NavLink></li>
                 <li><NavLink to="/tedaviler" className="nav-link" onClick={closeNav}>TEDAVİLER</NavLink></li>
                 <li><NavLink to="/blog" className="nav-link" onClick={closeNav}>BLOG</NavLink></li>
                 <li><NavLink to="/basin" className="nav-link" onClick={closeNav}>BASIN</NavLink></li>
                 <li><NavLink to="/yorumlar" className="nav-link" onClick={closeNav}>YORUMLAR</NavLink></li>
               </ul>

               <div className="nav-btn-wrapper">
                 <Link to="/iletisim" className="appointment-btn" onClick={closeNav}>Randevu Al</Link>
               </div>
            </nav>
         </div>
      </header>
    </>
  );
};

export default NavBar;