import React from 'react';
import { Link } from 'react-router-dom'; // 1. Link bileşenini import ettik
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
            <a href="#" className="social-icon"><FaFacebookF /></a>
            <a href="#" className="social-icon"><FaTwitter /></a>
            <a href="#" className="social-icon"><FaLinkedinIn /></a>
            <a href="#" className="social-icon"><FaInstagram /></a>
          </div>
        </div>

        {/* 2. SÜTUN: Linkler (GÜNCELLENDİ) */}
        <div className="footer-col">
          <h3 className="footer-title">Hızlı Erişim</h3>
          <ul className="footer-links">
            {/* a etiketleri Link'e, href'ler to'ya dönüştürüldü */}
            <li><Link to="/">Ana Sayfa</Link></li>
            <li><Link to="/hakkimda">Hakkımda</Link></li>
            <li><Link to="/tedaviler">Tedaviler</Link></li>
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
          
          <a 
            href="https://goo.gl/maps/dummylink" /* Buraya gerçek harita linkini koyabilirsin */
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