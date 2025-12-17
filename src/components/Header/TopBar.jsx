import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import './Header.css'; // CSS dosyamızı buraya dahil ediyoruz

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="container">
        
        {/* Sol Taraf: İletişim */}
        <div className="contact-info">
          <a href="tel:+902120000000" className="contact-item">
            <FaPhoneAlt />
            <span>+90 (212) 000 00 00</span>
          </a>
          <a href="mailto:info@farukerzengin.com" className="contact-item">
            <FaEnvelope />
            <span>info@farukerzengin.com</span>
          </a>
        </div>

        {/* Sağ Taraf: Sosyal Medya */}
        <div className="social-media">
          <a href="#" className="social-icon"><FaFacebookF /></a>
          <a href="#" className="social-icon"><FaTwitter /></a>
          <a href="#" className="social-icon"><FaInstagram /></a>
          <a href="#" className="social-icon"><FaLinkedinIn /></a>
        </div>

      </div>
    </div>
  );
};

export default TopBar;