import React from 'react';
import { FaTimes } from 'react-icons/fa'; // Kapatma (Çarpı) ikonu
import './Header.css';

const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <>
      {/* 1. Karartı (Overlay) - Sadece menü açıksa görünür */}
      <div 
        className={`mobile-menu-overlay ${isOpen ? 'open' : ''}`} 
        onClick={onClose}
      ></div>

      {/* 2. Kayan Menü (Drawer) */}
      <div className={`mobile-menu-drawer ${isOpen ? 'open' : ''}`}>
        
        {/* Üst Kısım: Başlık ve Kapat Butonu */}
        <div className="mobile-menu-header">
          <span className="mobile-logo">Prof. Dr. Erzengin</span>
          <FaTimes className="close-icon" onClick={onClose} />
        </div>

        {/* Menü Linkleri */}
        <ul className="mobile-nav-list">
          <li onClick={onClose}><a href="#home">Ana Sayfa</a></li>
          <li onClick={onClose}><a href="#about">Hakkımda</a></li>
          <li onClick={onClose}><a href="#treatments">Tedaviler</a></li>
          <li onClick={onClose}><a href="#publications">Yayınlar</a></li>
          <li onClick={onClose}><a href="#reviews">Hasta Yorumları</a></li>
          <li onClick={onClose}><a href="#contact" className="mobile-appointment-btn">Randevu Al</a></li>
        </ul>
      </div>
    </>
  );
};

export default MobileMenu;