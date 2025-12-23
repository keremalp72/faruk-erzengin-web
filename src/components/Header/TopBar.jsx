import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const TopBar = () => {
  return (
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
          <a href="#" aria-label="Facebook"><FaFacebookF /></a>
          <a href="#" aria-label="Twitter"><FaTwitter /></a>
          <a href="#" aria-label="Instagram"><FaInstagram /></a>
          <a href="#" aria-label="Linkedin"><FaLinkedinIn /></a>
        </div>

      </div>
    </div>
  );
};

export default TopBar;