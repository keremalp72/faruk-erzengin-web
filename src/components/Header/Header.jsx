import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div className="header-wrapper">
      
      {/* --- 1. TOP BAR (ÜST ÇUBUK) --- */}
      <div className="top-bar">
        <div className="container top-bar-container">
          
          {/* Sol Taraf: İletişim */}
          <div className="top-contact">
            <div className="contact-item">
              <FaPhoneAlt className="top-icon" /> <span>+90 (212) 234 56 78</span>
            </div>
            <div className="contact-item">
              <FaEnvelope className="top-icon" /> <span>info@farukerzengin.com</span>
            </div>
          </div>

          {/* Sağ Taraf: Sosyal Medya */}
          <div className="top-socials">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>

        </div>
      </div>

      {/* --- 2. ANA MENÜ (NAVBAR) --- */}
      <header className="main-header">
        <div className="container header-container">
          
          {/* LOGO */}
          <Link to="/" className="logo" onClick={() => setNavOpen(false)}>
            Prof. Dr. <span className="gold-text">Faruk Erzengin</span>
          </Link>

          {/* MOBİL MENÜ İKONU (Siyah renk olacak çünkü zemin beyaz) */}
          <div className="menu-icon" onClick={toggleNav}>
            {navOpen ? <FaTimes /> : <FaBars />}
          </div>

          {/* MENÜ LİNKLERİ */}
          <nav className={navOpen ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-links">
              <li><Link to="/" onClick={() => setNavOpen(false)}>Ana Sayfa</Link></li>
              <li><Link to="/hakkimda" onClick={() => setNavOpen(false)}>Hakkımda</Link></li>
              <li><Link to="/" onClick={() => setNavOpen(false)}>Tedaviler</Link></li>
              <li><Link to="/" onClick={() => setNavOpen(false)}>Yayınlar</Link></li>
              <li><Link to="/" onClick={() => setNavOpen(false)}>Yorumlar</Link></li>
            </ul>

            {/* RANDEVU AL BUTONU (Menünün içinde, sağda) */}
            <Link to="/" className="appointment-btn" onClick={() => setNavOpen(false)}>
              Randevu Al
            </Link>
          </nav>

        </div>
      </header>

    </div>
  );
};

export default Header;