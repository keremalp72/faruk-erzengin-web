import React, { useState, useEffect } from 'react';
import { treatmentsData } from '../data/treatmentsData';
import { blogData } from '../data/blogData'; 
// Link bileşenini ekliyoruz
import { Link } from 'react-router-dom'; 
import { FaArrowRight, FaTimes, FaStethoscope, FaSyringe, FaNotesMedical, FaUserMd, FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import './ServicesPage.css';

// Animasyon ve SEO
import ScrollReveal from '../components/Animations/ScrollReveal';
import SEO from '../components/SEO';

import doctorProfileImg from '../assets/images/aboutme/hakkimda1.png'; 

const ServicesPage = () => {
  const [selectedTreatment, setSelectedTreatment] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (selectedTreatment) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedTreatment]);

  return (
    <div className="tp-page-wrapper">
      
      <SEO 
        title="Tedaviler & Uzmanlık Alanları" 
        description="Prof. Dr. Faruk Erzengin'in uzmanlık alanları..." 
      />

      {/* HEADER */}
      <div className="tp-page-header">
        <ScrollReveal animation="fade-up">
          <div className="container">
            <h1 className="tp-page-title">Tedaviler & Hastalıklar</h1>
            <p className="tp-breadcrumb">Ana Sayfa / Tedaviler</p>
          </div>
        </ScrollReveal>
      </div>

      <div className="tp-layout">
        
        {/* SOL TARAFA: ANA İÇERİK */}
        <div className="tp-main-content">
          
          <ScrollReveal animation="fade-up" delay={0.2}>
            <div className="tp-intro-section">
              <h2>Uzmanlık Alanları ve Tedaviler</h2>
              <p>
                Aşağıdaki başlıklardan şikayetiniz veya hastalığınız ile ilgili detaylı bilgi alabilir, 
                Prof. Dr. Faruk Erzengin'in tedavi yaklaşımını inceleyebilirsiniz.
              </p>
            </div>
          </ScrollReveal>

          <div className="tp-treatments-grid">
            {treatmentsData.map((item, index) => (
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

        {/* SAĞ TARAF: SIDEBAR */}
        <aside className="tp-sidebar">
          
          {/* PROFİL */}
          <ScrollReveal animation="slide-in-right" delay={0.2}>
            <div className="tp-widget tp-profile-box">
              <div className="tp-profile-img">
                <img src={doctorProfileImg} alt="Prof. Dr. Faruk Erzengin" />
              </div>
              <h3>Prof. Dr. Faruk Erzengin</h3>
              <span className="tp-profile-role">Kardiyoloji & İç Hastalıkları Uzmanı</span>
              
              <div className="tp-social-row">
                <a href="https://www.facebook.com/faruk.erzengin.2025/" target="_blank" rel="noopener noreferrer" className="tp-social-btn"><FaFacebookF /></a>
                <a href="https://www.instagram.com/farukerzengin/" target="_blank" rel="noopener noreferrer" className="tp-social-btn"><FaInstagram /></a>
                <a href="https://www.linkedin.com/in/prof-dr-faruk-erzengin-676391130/" target="_blank" rel="noopener noreferrer" className="tp-social-btn"><FaLinkedinIn /></a>
              </div>
            </div>
          </ScrollReveal>

          {/* SON GÖNDERİLER (DÜZELTİLEN KISIM) */}
          <ScrollReveal animation="slide-in-right" delay={0.4}>
            <div className="tp-widget">
              <h4 className="tp-widget-title">Son Makaleler</h4>
              <div>
                {blogData && blogData.slice(0, 3).map((post) => (
                  <div key={post.id} className="tp-post-item">
                    {/* Resme tıklayınca da gitmesi için Link ile sarmaladık */}
                    <Link to={`/blog/${post.id}`} className="tp-post-thumb">
                      <img src={post.image} alt={post.title} />
                    </Link>
                    
                    <div className="tp-post-info">
                      {/* Başlığa tıklayınca ID'ye göre gitmesi için Link kullandık */}
                      <Link to={`/blog/${post.id}`}>
                        {post.title}
                      </Link>
                      <span className="tp-post-date">{post.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* İLETİŞİM */}
          <ScrollReveal animation="slide-in-right" delay={0.6}>
            <div className="tp-widget">
              <h4 className="tp-widget-title">Merkez Ofis (Avrupa)</h4>
              <ul className="tp-contact-list">
                <li>
                  <FaMapMarkerAlt className="tp-c-icon"/>
                  <span>Büyükdere Cad. Kral Apt. No: 75, Kat: 1, Mecidiyeköy / İstanbul</span>
                </li>
                <li>
                  <FaPhone className="tp-c-icon"/>
                  <span>0212 356 88 88</span>
                </li>
                <li>
                  <FaPhone className="tp-c-icon"/>
                  <span>0532 453 51 79 (Ortak Hat)</span>
                </li>
                <li>
                  <FaEnvelope className="tp-c-icon"/>
                  <span>farukerzengin@gmail.com</span>
                </li>
              </ul>
              <Link to="/iletisim" className="tp-btn-cta">Hemen Randevu Al</Link>
            </div>
          </ScrollReveal>

        </aside>

      </div>

      {/* MODAL (POP-UP) */}
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
                <Link to="/iletisim" className="tp-btn-modal">Randevu Al</Link>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default ServicesPage;