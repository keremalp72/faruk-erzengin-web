import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="container top-bar-container">
        
        {/* Sol Taraf: İletişim */}
        <div className="top-contact">
          <div className="contact-item">
            {/* Telefon tıklanabilir yapıldı (Mobilde aramayı açar) */}
            <a href="tel:+902122345678" style={{color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px'}}>
                <FaPhoneAlt className="top-icon" /> <span>+90 (212) 234 56 78</span>
            </a>
          </div>
          <div className="contact-item">
            {/* Mail tıklanabilir yapıldı */}
            <a href="mailto:info@farukerzengin.com" style={{color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px'}}>
                <FaEnvelope className="top-icon" /> <span>info@farukerzengin.com</span>
            </a>
          </div>
        </div>

        {/* Sağ Taraf: Sosyal Medya */}
        <div className="top-socials">
          <a href="https://www.facebook.com/faruk.erzengin.2025/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/farukerzengin/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/prof-dr-faruk-erzengin-676391130/" target="_blank" rel="noopener noreferrer" aria-label="Linkedin">
            <FaLinkedinIn />
          </a>
        </div>

      </div>
    </div>
  );
};

export default TopBar;