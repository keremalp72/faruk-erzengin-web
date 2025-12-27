import React, { useEffect, useState, useRef } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaCheck, FaBuilding, FaMap } from 'react-icons/fa';
import './ContactPage.css';
import ScrollReveal from '../components/Animations/ScrollReveal';

// 1. EmailJS Kütüphanesini Çağırıyoruz
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  
  // Harita Seçimi İçin State
  const [activeMap, setActiveMap] = useState('europe');
  
  // 2. Form Referansı Oluşturuyoruz
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
  
  // 3. Gönderim Durumu İçin State (Butonu kilitlemek için)
  const [isSending, setIsSending] = useState(false);

  const mapUrls = {
    europe: "https://maps.google.com/maps?q=Büyükdere%20Cad.%20Kral%20Apt.%20No:75%20Şişli%20İstanbul&t=&z=15&ie=UTF8&iwloc=&output=embed",
    asia: "https://maps.google.com/maps?q=Bağdat%20Cad.%20No:182%20Kadıköy%20İstanbul&t=&z=15&ie=UTF8&iwloc=&output=embed"
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (isSent) setIsSent(false);

    // EmailJS için HTML name'lerini 'user_name' yaptık ama 
    // State'imiz hala 'name' bekliyor. Burada eşleştirme yapıyoruz:
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

    // Gönderim Başlıyor
    setIsSending(true);

    // 4. EmailJS Gönderim Fonksiyonu
    // BURADAKİ ID BİLGİLERİNİ KENDİ PANELİNDEN ALIP YAPIŞTIR
    emailjs.sendForm(
      'service_ss629lf',   // Örn: service_x9d8f7s
      'template_0s1f0sr',  // Örn: template_8d7s6f5
      form.current,        // Form referansı
      '8r3vtuP8_9Qrw-Utv'    // Örn: user_H8s9d7f6g5h4
    )
    .then((result) => {
        console.log('Email başarıyla gönderildi:', result.text);
        setShowSuccess(true);
        setIsSent(true);
        setFormData({ name: '', phone: '', email: '', message: '' });
        setIsSending(false); // Buton kilidini aç

        setTimeout(() => {
          setShowSuccess(false);
        }, 3500);
    }, (error) => {
        console.log('Hata oluştu:', error.text);
        alert("Mesaj gönderilirken bir hata oluştu, lütfen tekrar deneyiniz.");
        setIsSending(false); // Buton kilidini aç
    });
  };

  return (
    <div className="contact-page">
      
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
            
            {/* 5. Form'a ref ekledik */}
            <form ref={form} onSubmit={handleSubmit} className="custom-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Adınız Soyadınız</label>
                  {/* name="user_name" EmailJS için standarttır */}
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
                  {/* name="user_phone" */}
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
                {/* name="user_email" */}
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
                {/* name="message" */}
                <textarea 
                  rows="5" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  placeholder="Mesajınızı buraya yazınız..." 
                  required
                ></textarea>
              </div>
              
              {/* Buton gönderim sırasında pasif olur */}
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