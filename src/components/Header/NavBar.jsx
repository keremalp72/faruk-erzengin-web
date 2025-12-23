import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavBar = ({ scrolled }) => {
  const [navOpen, setNavOpen] = useState(false);
  const location = useLocation();

  const toggleNav = () => setNavOpen(!navOpen);
  const closeNav = () => setNavOpen(false);

  // Ana sayfada değilsek veya scroll yapıldıysa sticky sınıfı ekle
  const isHomePage = location.pathname === '/';
  const stickyClass = scrolled || !isHomePage ? 'sticky' : '';

  return (
    <>
      {/* 1. GRİ ARKA PLAN (OVERLAY) */}
      {/* Menü açılınca arkada çıkan gri perde. Tıklayınca menüyü kapatır. */}
      <div 
        className={`nav-overlay ${navOpen ? 'active' : ''}`} 
        onClick={closeNav}
      ></div>

      <header className={`main-header ${stickyClass}`}>
        <div className="container header-container">
          
          {/* LOGO */}
          <Link to="/" className="logo" onClick={closeNav}>
            Prof. Dr. <span className="gold-text">Faruk Erzengin</span>
          </Link>

          {/* MOBİL MENÜ AÇMA İKONU (Hamburger) */}
          <div className="menu-icon" onClick={toggleNav}>
            <FaBars />
          </div>

          {/* MENÜ ALANI */}
          <nav className={`nav-menu ${navOpen ? 'active' : ''}`}>
            
            {/* 2. KAPATMA BUTONU (Menünün içinde, sağ üstte) */}
            <div className="mobile-menu-head">
              <span className="mobile-menu-title">Menü</span>
              <div className="close-icon" onClick={closeNav}>
                <FaTimes />
              </div>
            </div>

            <ul className="nav-links">
              <li><NavLink to="/" className="nav-link" onClick={closeNav}>ANA SAYFA</NavLink></li>
              <li><NavLink to="/hakkimda" className="nav-link" onClick={closeNav}>HAKKIMDA</NavLink></li>
              <li><NavLink to="/tedaviler" className="nav-link" onClick={closeNav}>TEDAVİLER</NavLink></li>
              <li><NavLink to="/basin" className="nav-link" onClick={closeNav}>BASIN</NavLink></li>
              <li><NavLink to="/yorumlar" className="nav-link" onClick={closeNav}>YORUMLAR</NavLink></li>
            </ul>

            <div className="nav-btn-wrapper">
               <Link to="/iletisim" className="appointment-btn" onClick={closeNav}>
                 Randevu Al
               </Link>
            </div>
          </nav>

        </div>
      </header>
    </>
  );
};

export default NavBar;