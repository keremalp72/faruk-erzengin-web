import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="container top-bar-container">
        
        {/* Sol Taraf: İletişim */}
        <div className="top-contact">
          <div className="contact-item">
            {/* Ortak GSM Hattı (Her iki yaka için geçerli) */}
            <a href="tel:+905324535179" style={{color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px'}}>
                <FaPhoneAlt className="top-icon" /> <span>+90 (532) 453 51 79</span>
            </a>
          </div>
          <div className="contact-item">
            {/* Kartvizitteki Güncel Mail Adresi */}
            <a href="mailto:farukerzengin@gmail.com" style={{color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px'}}>
                <FaEnvelope className="top-icon" /> <span>farukerzengin@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Sağ Taraf: Sosyal Medya */}
        <div className="top-socials">
          <a href="https://www.facebook.com/faruk.erzengin.2025/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebookF />
          </a>
          {/*<a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter />
          </a>*/}
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