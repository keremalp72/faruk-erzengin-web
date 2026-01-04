import React, { useEffect, useState, useRef } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaCheck, FaBuilding, FaMap } from 'react-icons/fa';
import './ContactPage.css';
import ScrollReveal from '../components/Animations/ScrollReveal';

// 1. EmailJS Kütüphanesini Çağırıyoruz
import emailjs from '@emailjs/browser';

// 2. SEO Bileşenini Ekliyoruz (Çok Önemli)
import SEO from '../components/SEO';

const ContactPage = () => {
  
  // Harita Seçimi İçin State
  const [activeMap, setActiveMap] = useState('europe');
  
  // 3. Form Referansı Oluşturuyoruz
  const form = useRef();

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
  
  // Gönderim Durumu İçin State
  const [isSending, setIsSending] = useState(false);

  const mapUrls = {
    europe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.310033271813!2d28.9987561!3d41.0668514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab6ff5a721ba3%3A0x8faba56dc9dc919a!2zTWVjaWRpeWVrw7Z5IE1haGFsbGVzaSwgQsO8ecO8a2RlcmUgQ2QuIE5vOjc1LCAzNDM4MSDFnmnFn2xpL8Swc3RhbmJ1bCwgVMO8cmtpeWU!5e0!3m2!1str!2str!4v1735985371235!5m2!1str!2str",
    asia: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.357001636192!2d29.0429148!3d40.9858763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab86614650f79%3A0x25c43bf70320d9f2!2sBa%C4%9Fdat%20Cd.%20No%3A182%2C%2034728%20Kad%C4%B1k%C3%B6y%2F%C4%B0stanbul%2C%20T%C3%BCrkiye!5e0!3m2!1str!2str!4v1735985500000!5m2!1str!2str"
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (isSent) setIsSent(false);

    // EmailJS name eşleştirmesi
    let stateKey = name;
    if (name === 'user_name') stateKey = 'name';
    if (name === 'user_phone') stateKey = 'phone';
    if (name === 'user_email') stateKey = 'email';

    let newErrors = { ...errors };

    if (stateKey === "name") {
      const nameRegex = /^[a-zA-ZğüşıöçĞÜŞİÖÇ\s]*$/;
      if (!nameRegex.test(value)) {
        newErrors.name = "Lütfen isminizde sadece harf kullanınız.";
      } else {
        newErrors.name = "";
      }
    }

    if (stateKey === "phone") {
      const phoneRegex = /^[0-9\s]*$/;
      if (!phoneRegex.test(value)) {
        newErrors.phone = "Lütfen geçerli bir numara giriniz (Sadece rakam).";
      } else {
        newErrors.phone = "";
      }
    }

    setErrors(newErrors);
    setFormData({ ...formData, [stateKey]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (errors.name || errors.phone) {
      alert("Lütfen formdaki hataları düzeltiniz.");
      return;
    }

    setIsSending(true);

    emailjs.sendForm(
      'service_ss629lf',
      'template_0s1f0sr',
      form.current,
      '8r3vtuP8_9Qrw-Utv'
    )
    .then((result) => {
        console.log('Email başarıyla gönderildi:', result.text);
        setShowSuccess(true);
        setIsSent(true);
        setFormData({ name: '', phone: '', email: '', message: '' });
        setIsSending(false);

        setTimeout(() => {
          setShowSuccess(false);
        }, 3500);
    }, (error) => {
        console.log('Hata oluştu:', error.text);
        alert("Mesaj gönderilirken bir hata oluştu, lütfen tekrar deneyiniz.");
        setIsSending(false);
    });
  };

  return (
    <div className="contact-page">
      
      {/* --- SEO AYARLARI --- */}
      <SEO 
        title="İletişim & Randevu" 
        description="Prof. Dr. Faruk Erzengin ile iletişime geçin. Mecidiyeköy ve Kadıköy muayenehane adresleri, telefon numaraları ve online randevu formu." 
      />

      {/* BAŞARI MODALI */}
      <div className={`success-overlay ${showSuccess ? 'active' : ''}`}>
        <div className="success-modal">
          <div className="success-icon-circle"><FaCheck className="success-icon" /></div>
          <h3>Mesajınız Alındı!</h3>
          <p>Teşekkürler, kaydınız başarıyla oluşturuldu.<br/>En kısa sürede tarafınıza dönüş sağlanacaktır.</p>
        </div>
      </div>

      {/* HEADER */}
      <div className="contact-header-section">
        <ScrollReveal animation="fade-up">
          <div className="contact-header-content">
            <h1 className="contact-hero-title">İletişime Geçin</h1>
            <p className="contact-hero-desc">
              Size en yakın ofisimizden randevu alabilir veya sorularınız için bize ulaşabilirsiniz.
            </p>
          </div>
        </ScrollReveal>
      </div>

      <div className="contact-container">
        
        {/* KARTLAR */}
        <div className="contact-info-grid">
           
           {/* 1. AVRUPA YAKASI (Mecidiyeköy) */}
           <ScrollReveal animation="fade-up" delay={0.1} className="contact-card location-card">
              <div className="icon-circle"><FaBuilding /></div>
              <h3>Avrupa Yakası (Merkez)</h3>
              <p className="location-subtitle">Mecidiyeköy Ofis</p>
              <div className="location-details">
                <p><strong>Adres:</strong> Büyükdere Cad. Kral Apt. No: 75, Kat: 1, D: 3, Şişli / İstanbul</p>
                <p><strong>Günler:</strong> Pazartesi & Cuma (12:00 - 18:00)</p>
                <div className="phone-list">
                   <a href="tel:02123568888"><FaPhone /> 0212 356 88 88</a>
                   <a href="tel:05322416838"><FaPhone /> 0532 241 68 38</a>
                </div>
              </div>
           </ScrollReveal>

           {/* 2. ANADOLU YAKASI (Kadıköy) */}
           <ScrollReveal animation="fade-up" delay={0.2} className="contact-card location-card">
              <div className="icon-circle"><FaMapMarkerAlt /></div>
              <h3>Anadolu Yakası</h3>
              <p className="location-subtitle">Kadıköy (HSM Görüntüleme)</p>
              <div className="location-details">
                <p><strong>Adres:</strong> Bağdat Cad. No: 182, Selami Çeşme, Kadıköy / İstanbul</p>
                <p><strong>Günler:</strong> Çarşamba (13:00 - 18:00)</p>
                <div className="phone-list">
                   <a href="tel:02164550000"><FaPhone /> 0216 455 00 00</a>
                   <a href="tel:05374235124"><FaPhone /> 0537 423 51 24</a>
                </div>
              </div>
           </ScrollReveal>

           {/* 3. GENEL İLETİŞİM */}
           <ScrollReveal animation="fade-up" delay={0.3} className="contact-card">
              <div className="icon-circle"><FaEnvelope /></div>
              <h3>Genel İletişim</h3>
              <p>Tüm randevu ve sorularınız için ortak hattımızdan bize ulaşabilirsiniz.</p>
              <div className="contact-links-wrapper">
                <a href="tel:05324535179" className="contact-link-item main-hotline">
                  <FaPhone className="c-link-icon" />
                  <div className="link-text">
                    <strong>Ortak Hat:</strong> 
                    <span>0532 453 51 79</span>
                  </div>
                </a>
                <a href="mailto:farukerzengin@gmail.com" className="contact-link-item">
                  <FaEnvelope className="c-link-icon" />
                  <div className="link-text">
                    <strong>E-posta:</strong> 
                    <span>farukerzengin@gmail.com</span>
                  </div>
                </a>
              </div>
           </ScrollReveal>
        </div>

        <div className="contact-content-wrapper">
          
          {/* FORM ALANI */}
          <ScrollReveal animation="slide-in-left" className="contact-form-area" delay={0.2}>
            <h2 className="form-title">Bize Mesaj Gönderin</h2>
            
            <form ref={form} onSubmit={handleSubmit} className="custom-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Adınız Soyadınız</label>
                  <input 
                    type="text" 
                    name="user_name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    placeholder="Örn: Ahmet Yılmaz" 
                    required 
                    className={errors.name ? "input-error" : ""} 
                  />
                </div>
                <div className="form-group">
                  <label>Telefon Numaranız</label>
                  <input 
                    type="tel" 
                    name="user_phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    placeholder="05XX XXX XX XX" 
                    required 
                    className={errors.phone ? "input-error" : ""} 
                  />
                </div>
              </div>
              <div className="form-group">
                <label>E-posta Adresiniz</label>
                <input 
                  type="email" 
                  name="user_email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  placeholder="ornek@email.com" 
                  required 
                />
              </div>
              <div className="form-group">
                <label>Mesajınız</label>
                <textarea 
                  rows="5" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  placeholder="Mesajınızı buraya yazınız..." 
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn-send-message" disabled={isSending}>
                {isSending ? 'GÖNDERİLİYOR...' : 'GÖNDER'}
              </button>

              {isSent && (
                <div className="form-success-message">
                  <FaCheck /> Mesajınız başarıyla gönderildi. Teşekkürler!
                </div>
              )}
            </form>
          </ScrollReveal>

          {/* HARİTA VE SOSYAL MEDYA */}
          <ScrollReveal animation="slide-in-right" className="contact-map-area" delay={0.2}>
            
            {/* Harita Butonları */}
            <div className="map-toggle-buttons">
              <button 
                className={`map-btn ${activeMap === 'europe' ? 'active' : ''}`} 
                onClick={() => setActiveMap('europe')}
              >
                <FaBuilding /> Avrupa (Mecidiyeköy)
              </button>
              <button 
                className={`map-btn ${activeMap === 'asia' ? 'active' : ''}`} 
                onClick={() => setActiveMap('asia')}
              >
                <FaMap /> Anadolu (Kadıköy)
              </button>
            </div>

             {/* Dinamik Harita Frame'i */}
             <div className="map-frame">
              <iframe 
                src={mapUrls[activeMap]} 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen="" 
                loading="lazy" 
                title="Google Map"
              ></iframe>
            </div>
            
            <div className="social-connect-box">
              <h3>Bizi Takip Edin</h3>
              <div className="social-icons-row">
                <a href="https://www.facebook.com/faruk.erzengin.2025/" target="_blank" rel="noopener noreferrer" className="s-icon"><FaFacebookF /></a>
                {/*<a href="#" target="_blank" rel="noopener noreferrer" className="s-icon"><FaTwitter /></a>*/}
                <a href="https://www.instagram.com/farukerzengin/" target="_blank" rel="noopener noreferrer" className="s-icon"><FaInstagram /></a>
                <a href="https://www.linkedin.com/in/prof-dr-faruk-erzengin-676391130/" target="_blank" rel="noopener noreferrer" className="s-icon"><FaLinkedinIn /></a>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;