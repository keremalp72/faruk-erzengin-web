import React, { useEffect, useState } from 'react';
/* İkonlar */
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaCheck } from 'react-icons/fa';
import './ContactPage.css';

const ContactPage = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({ name: '', phone: '' });
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (isSent) setIsSent(false);

    let newErrors = { ...errors };

    if (name === "name") {
      const nameRegex = /^[a-zA-ZğüşıöçĞÜŞİÖÇ\s]*$/;
      if (!nameRegex.test(value)) {
        newErrors.name = "Lütfen isminizde sadece harf kullanınız.";
      } else {
        newErrors.name = "";
      }
    }

    if (name === "phone") {
      const phoneRegex = /^[0-9\s]*$/;
      if (!phoneRegex.test(value)) {
        newErrors.phone = "Lütfen geçerli bir numara giriniz (Sadece rakam).";
      } else {
        newErrors.phone = "";
      }
    }

    setErrors(newErrors);
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (errors.name || errors.phone) {
      alert("Lütfen formdaki hataları düzeltiniz.");
      return;
    }

    setShowSuccess(true);
    setIsSent(true);
    setFormData({ name: '', phone: '', email: '', message: '' });

    setTimeout(() => {
      setShowSuccess(false);
    }, 3500);
  };

  return (
    <div className="contact-page">
      
      {/* BAŞARI MODALI */}
      <div className={`success-overlay ${showSuccess ? 'active' : ''}`}>
        <div className="success-modal">
          <div className="success-icon-circle">
            <FaCheck className="success-icon" />
          </div>
          <h3>Mesajınız Alındı!</h3>
          <p>Teşekkürler, kaydınız başarıyla oluşturuldu.<br/>En kısa sürede tarafınıza dönüş sağlanacaktır.</p>
        </div>
      </div>

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
        {/* KARTLAR */}
        <div className="contact-info-grid">
           <div className="contact-card">
            <div className="icon-circle"><FaMapMarkerAlt /></div>
            <h3>Adresimiz</h3>
            <p>Valikonağı Cad. No:123, Nişantaşı,<br />Şişli / İstanbul</p>
          </div>
          <div className="contact-card">
            <div className="icon-circle"><FaPhone /></div>
            <h3>İletişim Kanalları</h3>
            <div className="contact-links-wrapper">
              <a href="tel:+902122345678" className="contact-link-item"><strong>Tel:</strong> +90 (212) 234 56 78</a>
              <a href="mailto:info@farukerzengin.com" className="contact-link-item"><strong>E-posta:</strong> info@farukerzengin.com</a>
            </div>
          </div>
          <div className="contact-card">
            <div className="icon-circle"><FaClock /></div>
            <h3>Çalışma Saatleri</h3>
            <p><strong>Hafta İçi:</strong> 09:00 - 18:00<br /><strong>Cumartesi:</strong> 09:00 - 14:00</p>
          </div>
        </div>

        <div className="contact-content-wrapper">
          
          {/* FORM ALANI */}
          <div className="contact-form-area">
            <h2 className="form-title">Bize Mesaj Gönderin</h2>
            <form onSubmit={handleSubmit} className="custom-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Adınız Soyadınız</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Örn: Ahmet Yılmaz" required className={errors.name ? "input-error" : ""} />
                  {errors.name && <span className="error-text">{errors.name}</span>}
                </div>
                <div className="form-group">
                  <label>Telefon Numaranız</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="05XX XXX XX XX" required className={errors.phone ? "input-error" : ""} />
                  {errors.phone && <span className="error-text">{errors.phone}</span>}
                </div>
              </div>
              
              <div className="form-group">
                <label>E-posta Adresiniz</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="ornek@email.com" required />
              </div>

              <div className="form-group">
                <label>Mesajınız</label>
                <textarea rows="5" name="message" value={formData.message} onChange={handleChange} placeholder="Mesajınızı buraya yazınız..." required></textarea>
              </div>

              <button type="submit" className="btn-send-message">GÖNDER</button>

              {isSent && (
                <div className="form-success-message">
                  <FaCheck /> Mesajınız başarıyla gönderildi. Teşekkürler!
                </div>
              )}
            </form>
          </div>

          {/* HARİTA VE SOSYAL MEDYA */}
          <div className="contact-map-area">
             <div className="map-frame">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.9633698339308!2d28.993478515415754!3d41.04748497929683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7650656bd63%3A0x8ca058b28c20b6c3!2sNi%C5%9Fanta%C5%9F%C4%B1%2C%20Te%C5%9Fvikiye%2C%20%C5%9Ei%C5%9Fli%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1612345678901!5m2!1str!2str" width="100%" height="100%" style={{border:0}} allowFullScreen="" loading="lazy" title="Google Map"></iframe>
            </div>
            
            <div className="social-connect-box">
              <h3>Bizi Takip Edin</h3>
              <div className="social-icons-row">
                {/* GÜNCELLENEN SOSYAL MEDYA LİNKLERİ */}
                <a href="https://www.facebook.com/faruk.erzengin.2025/" target="_blank" rel="noopener noreferrer" className="s-icon"><FaFacebookF /></a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="s-icon"><FaTwitter /></a>
                <a href="https://www.instagram.com/farukerzengin/" target="_blank" rel="noopener noreferrer" className="s-icon"><FaInstagram /></a>
                <a href="https://www.linkedin.com/in/prof-dr-faruk-erzengin-676391130/" target="_blank" rel="noopener noreferrer" className="s-icon"><FaLinkedinIn /></a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;