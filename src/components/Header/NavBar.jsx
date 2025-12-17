import React from 'react';
import { FaBars } from 'react-icons/fa'; // Hamburger ikonu
import './Header.css';

const NavBar = ({ toggleMenu }) => {
  return (
    <nav className="navbar">
      <div className="container">
        
        {/* Logo Bölümü */}
        <a href="/" className="logo">
          <span>Prof. Dr.</span> Faruk Erzengin
        </a>

        {/* Masaüstü Menüsü (Mobilde CSS ile gizlenecek) */}
        <ul className="nav-menu">
          <li><a href="#home" className="nav-link">Ana Sayfa</a></li>
          <li><a href="#about" className="nav-link">Hakkımda</a></li>
          <li><a href="#treatments" className="nav-link">Tedaviler</a></li>
          <li><a href="#publications" className="nav-link">Yayınlar</a></li>
          <li><a href="#reviews" className="nav-link">Yorumlar</a></li>
        </ul>

        {/* Aksiyon Butonu (Mobilde CSS ile gizlenecek) */}
        <a href="#contact" className="btn-appointment">
          Randevu Al
        </a>

        {/* Hamburger İkonu (Sadece Mobilde Görünür) */}
        <div className="hamburger-icon" onClick={toggleMenu}>
          <FaBars />
        </div>

      </div>
    </nav>
  );
};

export default NavBar;