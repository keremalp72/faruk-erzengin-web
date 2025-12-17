import React from 'react';
import { FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'; // Kullanılmayan ikonları sildik
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
            <a href="#" className="social-icon"><FaFacebookF /></a>
            <a href="#" className="social-icon"><FaTwitter /></a>
            <a href="#" className="social-icon"><FaLinkedinIn /></a>
            <a href="#" className="social-icon"><FaInstagram /></a>
          </div>
        </div>

        {/* 2. SÜTUN: Linkler */}
        <div className="footer-col">
          <h3 className="footer-title">Hızlı Erişim</h3>
          <ul className="footer-links">
            <li><a href="#home">Ana Sayfa</a></li>
            <li><a href="#about">Hakkımda</a></li>
            <li><a href="#treatments">Tedaviler</a></li>
            <li><a href="#reviews">Yorumlar</a></li>
          </ul>
        </div>

        {/* 3. SÜTUN: Sadece Adres (Artık çok ferah) */}
        <div className="footer-col">
          <h3 className="footer-title">Adres</h3>
          <div className="single-contact-box">
             <FaMapMarkerAlt className="big-icon" />
             <p className="address-text">
               Teşvikiye Mah. Hakkı Yeten Cad. <br/>
               No:11 Şişli / İstanbul
             </p>
          </div>
          {/* Haritada Göster butonu ekleyerek boşluğu şık değerlendirelim */}
          <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="map-link">
            Haritada Göster &rarr;
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Prof. Dr. Faruk Erzengin. Tüm Hakları Saklıdır.</p>
      </div>
    </footer>
  );
};

export default Footer;