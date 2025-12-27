import React, { useState, useEffect } from 'react';
import { treatmentsData } from '../data/treatmentsData';
import { blogData } from '../data/blogData'; 
import { FaArrowRight, FaTimes, FaStethoscope, FaSyringe, FaNotesMedical, FaUserMd, FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import './ServicesPage.css';

// 1. Animasyon Bileşenini Import Ediyoruz
import ScrollReveal from '../components/Animations/ScrollReveal';

import doctorProfileImg from '../assets/images/hakkimda1.png'; 

const ServicesPage = () => {
  const [selectedTreatment, setSelectedTreatment] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Modal açılınca scroll engelleme
  useEffect(() => {
    if (selectedTreatment) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedTreatment]);

  return (
    <div className="tp-page-wrapper">
      
      {/* HEADER - Fade In */}
      <div className="tp-page-header">
        <ScrollReveal animation="fade-up">
          <div className="container">
            <h1 className="tp-page-title">Tedaviler & Hastalıklar</h1>
            <p className="tp-breadcrumb">Ana Sayfa / Tedaviler</p>
          </div>
        </ScrollReveal>
      </div>

      <div className="tp-layout">
        
        {/* --- SOL TARAFA: ANA İÇERİK (KARTLAR) --- */}
        <div className="tp-main-content">
          
          {/* Giriş Yazısı */}
          <ScrollReveal animation="fade-up" delay={0.2}>
            <div className="tp-intro-section">
              <h2>Uzmanlık Alanları ve Tedaviler</h2>
              <p>
                Aşağıdaki başlıklardan şikayetiniz veya hastalığınız ile ilgili detaylı bilgi alabilir, 
                Prof. Dr. Faruk Erzengin'in tedavi yaklaşımını inceleyebilirsiniz.
              </p>
            </div>
          </ScrollReveal>

          {/* KARTLAR GRID - Sırayla Gelme Efekti */}
          <div className="tp-treatments-grid">
            {treatmentsData.map((item, index) => (
              // index * 0.1 sayesinde her kart bir öncekinden 0.1sn sonra gelir
              <ScrollReveal key={item.id} animation="fade-up" delay={index * 0.1}>
                <div className="tp-card" onClick={() => setSelectedTreatment(item)}>
                  <div className="tp-card-img-box">
                    <img src={item.image} alt={item.title} />
                    <div className="tp-card-overlay">
                      <span>İncele</span>
                    </div>
                  </div>
                  <div className="tp-card-body">
                    <h3>{item.title}</h3>
                    <p>{item.shortDesc}</p>
                    <button className="tp-btn-link">
                      Detaylı Bilgi <FaArrowRight />
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* --- SAĞ TARAF: SIDEBAR (Sağdan Kayarak Gelsin) --- */}
        <aside className="tp-sidebar">
          
          {/* 1. KUTU: PROFİL */}
          <ScrollReveal animation="slide-in-right" delay={0.2}>
            <div className="tp-widget tp-profile-box">
              <div className="tp-profile-img">
                <img src={doctorProfileImg} alt="Prof. Dr. Faruk Erzengin" />
              </div>
              <h3>Prof. Dr. Faruk Erzengin</h3>
              <span className="tp-profile-role">Kardiyoloji & İç Hastalıkları Uzmanı</span>
              
              <div className="tp-social-row">
                <a href="https://www.facebook.com/faruk.erzengin.2025/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="tp-social-btn"><FaFacebookF /></a>
               {/*<a href="#" className="tp-social-btn"><FaTwitter /></a>*/} 
                <a href="https://www.instagram.com/farukerzengin/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="tp-social-btn"><FaInstagram /></a>
                <a href="https://www.linkedin.com/in/prof-dr-faruk-erzengin-676391130/" target="_blank" rel="noopener noreferrer" aria-label="Linkedin" className="tp-social-btn"><FaLinkedinIn /></a>
              </div>
            </div>
          </ScrollReveal>

          {/* 2. KUTU: SON GÖNDERİLER */}
          <ScrollReveal animation="slide-in-right" delay={0.4}>
            <div className="tp-widget">
              <h4 className="tp-widget-title">Son Makaleler</h4>
              <div>
                {blogData && blogData.slice(0, 3).map((post) => (
                  <div key={post.id} className="tp-post-item">
                    <div className="tp-post-thumb">
                      <img src={post.image} alt={post.title} />
                    </div>
                    <div className="tp-post-info">
                      <a href="/blog">{post.title}</a>
                      <span className="tp-post-date">{post.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* 3. KUTU: İLETİŞİM */}
          <ScrollReveal animation="slide-in-right" delay={0.6}>
            <div className="tp-widget">
              <h4 className="tp-widget-title">İletişim Bilgileri</h4>
              <ul className="tp-contact-list">
                <li>
                  <FaMapMarkerAlt className="tp-c-icon"/>
                  <span>Valikonağı Cad. No:123, Nişantaşı, İstanbul</span>
                </li>
                <li>
                  <FaPhone className="tp-c-icon"/>
                  <span>+90 (212) 234 56 78</span>
                </li>
                <li>
                  <FaEnvelope className="tp-c-icon"/>
                  <span>info@farukerzengin.com</span>
                </li>
              </ul>
              <a href="/iletisim" className="tp-btn-cta">Hemen Randevu Al</a>
            </div>
          </ScrollReveal>

        </aside>

      </div>

      {/* --- MODAL (POP-UP) - Animasyonu CSS'te tanımlı (tpSlideUp), buraya dokunmuyoruz --- */}
      {selectedTreatment && (
        <div className="tp-modal-overlay" onClick={() => setSelectedTreatment(null)}>
          <div className="tp-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="tp-modal-close" onClick={() => setSelectedTreatment(null)}><FaTimes /></button>
            
            <div className="tp-modal-header-img">
              <img src={selectedTreatment.image} alt={selectedTreatment.title} />
              <div className="tp-modal-title-box">
                <h2>{selectedTreatment.title}</h2>
              </div>
            </div>

            <div className="tp-modal-body">
              <div className="tp-info-block">
                <h3><FaNotesMedical /> Nedir?</h3>
                <p>{selectedTreatment.content.description}</p>
              </div>

              <div className="tp-info-grid">
                <div className="tp-info-item">
                  <h3><FaStethoscope /> Belirtiler</h3>
                  <ul>
                    {Array.isArray(selectedTreatment.content.symptoms) ? (
                      selectedTreatment.content.symptoms.map((sym, idx) => <li key={idx}>{sym}</li>)
                    ) : (
                      <li>{selectedTreatment.content.symptoms}</li>
                    )}
                  </ul>
                </div>
                <div className="tp-info-item">
                  <h3><FaSyringe /> Tedavi Yöntemleri</h3>
                  <p>{selectedTreatment.content.treatment}</p>
                </div>
              </div>

              <div className="tp-doctor-note">
                <h3><FaUserMd /> Prof. Dr. Faruk Erzengin'in Yaklaşımı</h3>
                <p>"{selectedTreatment.content.approach}"</p>
              </div>

              <div className="tp-modal-footer">
                <a href="/iletisim" className="tp-btn-modal">Randevu Al</a>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default ServicesPage;