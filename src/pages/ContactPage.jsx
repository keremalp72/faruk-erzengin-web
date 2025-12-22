import React, { useEffect } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import './ContactPage.css';

const ContactPage = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Mesajınız başarıyla gönderildi. En kısa sürede size döneceğiz.");
  };

  return (
    <div className="contact-page">
      
      {/* HEADER */}
      <div className="contact-header-section">
        <div className="contact-header-content">
          <h1 className="contact-hero-title">İletişime Geçin</h1>
          <p className="contact-hero-desc">
            Randevu talepleriniz, sorularınız veya danışmak istedikleriniz için bize ulaşın.
          </p>
        </div>
      </div>

      <div className="contact-container">
        
        {/* 1. BİLGİ KARTLARI (3'lü Grid) */}
        <div className="contact-info-grid">
          
          {/* Kart 1: Adres */}
          <div className="contact-card">
            <div className="icon-circle"><FaMapMarkerAlt /></div>
            <h3>Adresimiz</h3>
            <p>Valikonağı Cad. No:123, Nişantaşı,<br />Şişli / İstanbul</p>
          </div>

          {/* Kart 2: Telefon & Mail */}
          <div className="contact-card">
            <div className="icon-circle"><FaPhone /></div>
            <h3>İletişim Kanalları</h3>
            <p>
              <strong>Tel:</strong> +90 (212) 234 56 78<br />
              <strong>E-posta:</strong> info@farukerzengin.com
            </p>
          </div>

          {/* Kart 3: Çalışma Saatleri */}
          <div className="contact-card">
            <div className="icon-circle"><FaClock /></div>
            <h3>Çalışma Saatleri</h3>
            <p>
              <strong>Hafta İçi:</strong> 09:00 - 18:00<br />
              <strong>Cumartesi:</strong> 09:00 - 14:00
            </p>
          </div>

        </div>

        {/* 2. FORM VE HARİTA BÖLÜMÜ */}
        <div className="contact-content-wrapper">
          
          {/* SOL: İLETİŞİM FORMU */}
          <div className="contact-form-area">
            <h2 className="form-title">Bize Mesaj Gönderin</h2>
            <form onSubmit={handleSubmit} className="custom-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Adınız Soyadınız</label>
                  <input type="text" placeholder="Örn: Ahmet Yılmaz" required />
                </div>
                <div className="form-group">
                  <label>Telefon Numaranız</label>
                  <input type="tel" placeholder="05XX XXX XX XX" required />
                </div>
              </div>
              
              <div className="form-group">
                <label>E-posta Adresiniz</label>
                <input type="email" placeholder="ornek@email.com" required />
              </div>

              <div className="form-group">
                <label>Konu</label>
                <select>
                  <option>Randevu Talebi</option>
                  <option>Muayene Bilgisi</option>
                  <option>Diğer</option>
                </select>
              </div>

              <div className="form-group">
                <label>Mesajınız</label>
                <textarea rows="5" placeholder="Mesajınızı buraya yazınız..." required></textarea>
              </div>

              <button type="submit" className="btn-send-message">GÖNDER</button>
            </form>
          </div>

          {/* SAĞ: HARİTA VE SOSYAL MEDYA */}
          <div className="contact-map-area">
            {/* Google Harita Embed */}
            <div className="map-frame">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.974531899148!2d28.99049931564756!3d41.04746697929688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7650656bd63%3A0x8ca058b28c20b6c3!2zTmnFm2FudGHFn8SxLCBWYWxpa29uYcSfxLEgQ2QuLCDFnmnFm2xpL8Swc3RhbmJ1bA!5e0!3m2!1str!2str!4v1625667000000!5m2!1str!2str" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen="" 
                loading="lazy"
                title="Google Map"
              ></iframe>
            </div>

            {/* Sosyal Medya Kutusu */}
            <div className="social-connect-box">
              <h3>Bizi Takip Edin</h3>
              <div className="social-icons-row">
                <a href="#" className="s-icon"><FaFacebookF /></a>
                <a href="#" className="s-icon"><FaTwitter /></a>
                <a href="#" className="s-icon"><FaInstagram /></a>
                <a href="#" className="s-icon"><FaLinkedinIn /></a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ContactPage;