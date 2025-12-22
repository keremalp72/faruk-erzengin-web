import React, { useState, useEffect } from 'react';
import { treatmentsData } from '../data/treatmentsData';
import { blogData } from '../data/blogData'; // Blog verisini de buraya çekelim (Sidebar için)
import { FaArrowRight, FaTimes, FaStethoscope, FaSyringe, FaNotesMedical, FaUserMd, FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import './ServicesPage.css';

// Hocanın resmini import edelim (Ana sayfada kullandığını kullanabiliriz)
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
    <div className="services-page">
      
      {/* HEADER */}
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Tedaviler & Hastalıklar</h1>
          <p className="breadcrumb">Ana Sayfa / Tedaviler</p>
        </div>
      </div>

      <div className="container page-content">
        
        <div className="services-layout">
          
          {/* --- SOL TARAFA: ANA İÇERİK (KARTLAR) --- */}
          <div className="services-main">
            
            <div className="services-intro">
              <h2>Uzmanlık Alanları ve Tedaviler</h2>
              <p>
                Aşağıdaki başlıklardan şikayetiniz veya hastalığınız ile ilgili detaylı bilgi alabilir, 
                Prof. Dr. Faruk Erzengin'in tedavi yaklaşımını inceleyebilirsiniz.
              </p>
            </div>

            <div className="treatments-grid">
              {treatmentsData.map((item) => (
                <div key={item.id} className="treatment-card" onClick={() => setSelectedTreatment(item)}>
                  <div className="card-image">
                    <img src={item.image} alt={item.title} />
                    <div className="card-overlay">
                      <span>İncele</span>
                    </div>
                  </div>
                  <div className="card-body">
                    <h3>{item.title}</h3>
                    <p>{item.shortDesc}</p>
                    <button className="btn-card-link">
                      Detaylı Bilgi <FaArrowRight />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* --- SAĞ TARAF: SIDEBAR (YAN MENÜ) --- */}
          <aside className="services-sidebar">
            
            {/* 1. KUTU: PROFİL & SOSYAL MEDYA */}
            <div className="sidebar-widget profile-widget">
              <div className="profile-img-box">
                <img src={doctorProfileImg} alt="Prof. Dr. Faruk Erzengin" />
              </div>
              <h3>Prof. Dr. Faruk Erzengin</h3>
              <span className="profile-title">Kardiyoloji & İç Hastalıkları Uzmanı</span>
              
              <div className="social-links">
                <a href="#" className="social-btn facebook"><FaFacebookF /></a>
                <a href="#" className="social-btn twitter"><FaTwitter /></a>
                <a href="#" className="social-btn instagram"><FaInstagram /></a>
                <a href="#" className="social-btn linkedin"><FaLinkedinIn /></a>
              </div>
            </div>

            {/* 2. KUTU: SON GÖNDERİLER (BLOG) */}
            <div className="sidebar-widget recent-posts-widget">
              <h4 className="widget-title">Son Makaleler</h4>
              <div className="widget-content">
                {/* blogData'dan ilk 3 veriyi çekiyoruz */}
                {blogData && blogData.slice(0, 3).map((post) => (
                  <div key={post.id} className="recent-post-item">
                    <div className="rp-thumb">
                      <img src={post.image} alt={post.title} />
                    </div>
                    <div className="rp-info">
                      <a href="/hakkimda">{post.title}</a>
                      <span className="rp-date">{post.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. KUTU: İLETİŞİM BİLGİLERİ */}
            <div className="sidebar-widget contact-widget">
              <h4 className="widget-title">İletişim Bilgileri</h4>
              <ul className="contact-list">
                <li>
                  <FaMapMarkerAlt className="c-icon"/>
                  <span>Valikonağı Cad. No:123, Nişantaşı, İstanbul</span>
                </li>
                <li>
                  <FaPhone className="c-icon"/>
                  <span>+90 (212) 234 56 78</span>
                </li>
                <li>
                  <FaEnvelope className="c-icon"/>
                  <span>info@farukerzengin.com</span>
                </li>
              </ul>
              <a href="/iletisim" className="btn-sidebar-cta">Hemen Randevu Al</a>
            </div>

          </aside>

        </div>
      </div>

      {/* --- MODAL (POP-UP) - AYNI KALIYOR --- */}
      {selectedTreatment && (
        <div className="modal-overlay" onClick={() => setSelectedTreatment(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedTreatment(null)}><FaTimes /></button>
            <div className="modal-header-image">
              <img src={selectedTreatment.image} alt={selectedTreatment.title} />
              <div className="modal-title-box">
                <h2>{selectedTreatment.title}</h2>
              </div>
            </div>
            <div className="modal-body">
              <div className="info-block">
                <h3><FaNotesMedical /> Nedir?</h3>
                <p>{selectedTreatment.content.description}</p>
              </div>
              <div className="info-grid">
                <div className="info-item">
                  <h3><FaStethoscope /> Belirtiler</h3>
                  <ul>
                    {Array.isArray(selectedTreatment.content.symptoms) ? (
                      selectedTreatment.content.symptoms.map((sym, idx) => <li key={idx}>{sym}</li>)
                    ) : (
                      <li>{selectedTreatment.content.symptoms}</li>
                    )}
                  </ul>
                </div>
                <div className="info-item">
                  <h3><FaSyringe /> Tedavi Yöntemleri</h3>
                  <p>{selectedTreatment.content.treatment}</p>
                </div>
              </div>
              <div className="doctor-note">
                <h3><FaUserMd /> Prof. Dr. Faruk Erzengin'in Yaklaşımı</h3>
                <p>"{selectedTreatment.content.approach}"</p>
              </div>
              <div className="modal-footer">
                <a href="/iletisim" className="btn-modal-cta">Randevu Al</a>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default ServicesPage;