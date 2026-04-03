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
            <a href="https://www.facebook.com/faruk.erzengin.2025/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" title="Facebook Sayfamız" className="social-icon">
                <FaFacebookF />
            </a>
            {/*<a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter />
          </a>*/}
            <a href="https://www.linkedin.com/in/prof-dr-faruk-erzengin-676391130/" target="_blank" rel="noopener noreferrer" aria-label="Linkedin" title="LinkedIn Profilimiz" className="social-icon">
                <FaLinkedinIn />
            </a>
            <a href="https://www.instagram.com/farukerzengin/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram Sayfamız" className="social-icon">
                <FaInstagram />
            </a>
          </div>
        </div>

        {/* 2. SÜTUN: Hızlı Erişim Linkleri */}
        <div className="footer-col">
          <h3 className="footer-title">Hızlı Erişim</h3>
          <ul className="footer-links">
            <li><Link to="/" title="Ana Sayfaya Dön">Ana Sayfa</Link></li>
            <li><Link to="/hakkinda" title="Hakkımızda Daha Fazla Bilgi">Hakkında</Link></li>
            <li><Link to="/tedaviler" title="Kardiyoloji ve İç Hastalıkları Tedavileri">Tedaviler</Link></li>
            <li><Link to="/blog" title="Tıbbi Makaleler ve Blog Yazıları">Blog</Link></li>
            <li><Link to="/basin" title="Basında Biz">Basın</Link></li>
            <li><Link to="/yorumlar" title="Hasta Yorumları">Yorumlar</Link></li>
            <li><Link to="/iletisim" title="Bize Ulaşın ve Randevu Alın">İletişim</Link></li>
          </ul>
        </div>

        {/* 3. SÜTUN: Adres (Mecidiyeköy - Merkez) */}
        <div className="footer-col">
          <h3 className="footer-title">Merkez Ofis (Avrupa)</h3>
          <div className="single-contact-box">
             <FaMapMarkerAlt className="big-icon" />
             <p className="address-text">
               Büyükdere Cad. Kral Apt. No: 75 <br/>
               Kat: 1, D: 3, Mecidiyeköy <br/>
               Şişli / İstanbul
             </p>
          </div>
          
          {/* Gerçek Google Haritalar Arama Linki */}
          <a 
            href="https://www.google.com/maps/search/?api=1&query=Büyükdere+Cad.+Kral+Apt.+No:+75,+Mecidiyeköy,+Şişli,+İstanbul" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="map-link"
          >
            Haritada Göster →
          </a>

          {/* Anadolu Yakası Bilgilendirmesi */}
          <div style={{marginTop: '15px', fontSize: '13px', color: '#aaa', lineHeight: '1.4'}}>
            <span style={{color: '#C5A059'}}>*</span> Anadolu Yakası (Kadıköy) ofis bilgileri için <Link to="/iletisim" style={{color: '#fff', textDecoration: 'underline'}}>iletişim sayfasına</Link> bakınız.
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Prof. Dr. Faruk Erzengin. Tüm Hakları Saklıdır.</p>
      </div>
    </footer>
  );
};

export default Footer;