import React from 'react';
import { Link } from 'react-router-dom'; 
import { FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section" id="contact">
      <div className="container footer-container">
        
        {/* 1. SÜTUN: Logo & Sosyal Medya */}
        <div className="footer-col">
          <h2 className="footer-logo">
            Prof. Dr. <span className="gold-text">Faruk Erzengin</span>
          </h2>
          <p className="footer-desc">
            Kalp sağlığınız ve iç hastalıkları konusunda 40 yılı aşkın tecrübe ile güvenilir hizmet.
          </p>
          
          <div className="social-links">
            <a href="https://www.facebook.com/faruk.erzengin.2025/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-icon">
                <FaFacebookF />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="social-icon">
                <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/in/prof-dr-faruk-erzengin-676391130/" target="_blank" rel="noopener noreferrer" aria-label="Linkedin" className="social-icon">
                <FaLinkedinIn />
            </a>
            <a href="https://www.instagram.com/farukerzengin/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon">
                <FaInstagram />
            </a>
          </div>
        </div>

        {/* 2. SÜTUN: Hızlı Erişim Linkleri */}
        <div className="footer-col">
          <h3 className="footer-title">Hızlı Erişim</h3>
          <ul className="footer-links">
            <li><Link to="/">Ana Sayfa</Link></li>
            <li><Link to="/hakkimda">Hakkımda</Link></li>
            <li><Link to="/tedaviler">Tedaviler</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/basin">Basın</Link></li>
            <li><Link to="/yorumlar">Yorumlar</Link></li>
            <li><Link to="/iletisim">İletişim</Link></li>
          </ul>
        </div>

        {/* 3. SÜTUN: Adres */}
        <div className="footer-col">
          <h3 className="footer-title">Adres</h3>
          <div className="single-contact-box">
             <FaMapMarkerAlt className="big-icon" />
             <p className="address-text">
               Teşvikiye Mah. Hakkı Yeten Cad. <br/>
               No:11 Şişli / İstanbul
             </p>
          </div>
          
          {/* GÜNCELLENDİ: Gerçek Google Haritalar Linki */}
          <a 
            href="https://www.google.com/maps/place/Te%C5%9Fvikiye,+Hakk%C4%B1+Yeten+Cd.+No:11%2F13,+34394+%C5%9Ei%C5%9Fli%2F%C4%B0stanbul/@41.0548526,28.9986853,17z/data=!3m1!4b1!4m5!3m4!1s0x14cab7cf21c6eabd:0x34f84f5f36494ac6!8m2!3d41.0548526!4d28.9986853" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="map-link"
          >
            Haritada Göster →
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2025 Prof. Dr. Faruk Erzengin. Tüm Hakları Saklıdır.</p>
      </div>
    </footer>
  );
};

export default Footer;