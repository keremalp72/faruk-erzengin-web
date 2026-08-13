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

        {/* 3. SÜTUN: Adres (Kadıköy) */}
        <div className="footer-col">
          <h3 className="footer-title">Anadolu Yakası (HSM)</h3>
          <div className="single-contact-box">
             <FaMapMarkerAlt className="big-icon" />
             <p className="address-text">
               Bağdat Cad. No: 182 <br/>
               Selami Çeşme, Kadıköy <br/>
               İstanbul
             </p>
          </div>
          <div className="footer-contact-links">
            <a href="tel:+902164550000" className="footer-phone-link">📞 0216 455 00 00</a>
            <a href="tel:+905324535179" className="footer-phone-link">📱 0532 453 51 79</a>
            <a href="mailto:farukerzengin@gmail.com" className="footer-email-link">✉️ farukerzengin@gmail.com</a>
          </div>
          
          {/* Gerçek Google Haritalar Arama Linki */}
          <a 
            href="https://www.google.com/maps/search/?api=1&query=Bağdat+Cad.+No:+182,+Selami+Çeşme,+Kadıköy,+İstanbul" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="map-link"
          >
            Haritada Göster →
          </a>

          {/* Avrupa Yakası Bilgilendirmesi */}
          <div style={{marginTop: '15px', fontSize: '13px', color: '#aaa', lineHeight: '1.4'}}>
            <span style={{color: '#C5A059'}}>*</span> Vakıf Merkezi ofis bilgileri için <Link to="/iletisim" style={{color: '#fff', textDecoration: 'underline'}}>iletişim sayfasına</Link> bakınız.
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