import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavBar = ({ scrolled }) => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => setNavOpen(!navOpen);
  const closeNav = () => setNavOpen(false);

  // GÜNCELLEME: Sadece 'scrolled' true ise sticky olsun.
  // Diğer sayfa kontrolünü buradan kaldırdık, CSS ile yapacağız.
  const stickyClass = scrolled ? 'sticky' : '';

  return (
    <>
      <div 
        className={`nav-overlay ${navOpen ? 'active' : ''}`} 
        onClick={closeNav}
      ></div>

      <header className={`main-header ${stickyClass}`}>
         {/* ... (Geri kalan kodlar aynı) ... */}
         <div className="container header-container">
            {/* Logo, Menü İkonu, Nav Linkler... Burası aynı kalıyor */}
            <Link to="/" className="logo" onClick={closeNav}>
              Prof. Dr. <span className="gold-text">Faruk Erzengin</span>
            </Link>
            
            <div className="menu-icon" onClick={toggleNav}><FaBars /></div>

            <nav className={`nav-menu ${navOpen ? 'active' : ''}`}>
               {/* ... Linkler ... */}
               <div className="mobile-menu-head">
                 <span className="mobile-menu-title">Menü</span>
                 <div className="close-icon" onClick={closeNav}><FaTimes /></div>
               </div>
               <ul className="nav-links">
                  <li><NavLink to="/" className="nav-link" onClick={closeNav}>ANA SAYFA</NavLink></li>
                  <li><NavLink to="/hakkimda" className="nav-link" onClick={closeNav}>HAKKIMDA</NavLink></li>
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