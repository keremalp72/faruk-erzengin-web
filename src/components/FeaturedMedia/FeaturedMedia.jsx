import React, { useState, useRef } from 'react';
import './FeaturedMedia.css';
// FaTimes (Kapatma X ikonu) eklendi
import { FaQuoteRight, FaCalendarCheck, FaChevronLeft, FaChevronRight, FaImages, FaTimes } from 'react-icons/fa';
import ScrollReveal from '../Animations/ScrollReveal';
import { Link } from 'react-router-dom';

// Resim Importları
import img1 from '../../assets/images/aboutme/hakkimda1.png';
import img2 from '../../assets/images/aboutme/hakkimda2.png';
import img3 from '../../assets/images/aboutme/hakkimda3.png';
import img4 from '../../assets/images/aboutme/hakkimda4.png';

const FeaturedMedia = () => {
  const galleryRef = useRef(null);
  
  // YENİ STATE: Seçilen (büyütülen) resim
  const [selectedImage, setSelectedImage] = useState(null);

  // Galeri Verisi (Artık sadece ID ve SRC yeterli, başlıkları sildik)
  const galleryImages = [
    { id: 1, src: img1 },
    { id: 2, src: img2 },
    { id: 3, src: img3 },
    { id: 4, src: img4 },
    // Örnek çoğaltma
    { id: 5, src: img1 },
    { id: 6, src: img2 },
  ];

  const scrollLeft = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  // Lightbox açma fonksiyonu
  const openLightbox = (imgSrc) => {
    setSelectedImage(imgSrc);
    document.body.style.overflow = 'hidden'; // Arka plan kaymasını engelle
  };

  // Lightbox kapatma fonksiyonu
  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset'; // Kaydırmayı geri aç
  };

  return (
    <section className="fm-section">
      
      <div className="fm-bg-blur blur-1"></div>
      <div className="fm-bg-blur blur-2"></div>

      <div className="container fm-container-padding">
        
        {/* --- BAŞLIK (Değişmedi) --- */}
        <ScrollReveal animation="fade-up">
          <div className="fm-header">
            <h2 className="fm-title">
              Basında <span className="gold-text">Prof. Dr. Faruk Erzengin</span>
            </h2>
            <div className="fm-divider"></div>
            <p className="fm-subtitle">
              Türkiye'nin en güvenilir haber kanallarında ve bilimsel platformlarda <br/>
              yankı uyandıran tedavi yöntemleri ve uzman görüşleri.
            </p>
          </div>
        </ScrollReveal>

        {/* --- VİDEO GRID (Değişmedi) --- */}
        <div className="fm-grid">
          {/* Video 1: Tanıtım */}
          <ScrollReveal animation="slide-in-left" delay={0.2}>
            <div className="fm-card video-card">
              <div className="card-top-decoration"></div>
              <div className="video-frame">
                <iframe 
                  src="https://www.youtube.com/embed/gD-7bmIkBp0" 
                  title="Tanıtım Filmi" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
              <div className="fm-card-content">
                <div className="fm-tag">Biyografi</div>
                <h3>Bir Bilim İnsanının Yolculuğu</h3>
                <p>
                  "Hocaların Hocası" olarak bilinen Prof. Dr. Faruk Erzengin'in akademik kariyeri 
                  ve tıp dünyasına kattığı değerler.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Video 2: ATV Haber */}
          <ScrollReveal animation="slide-in-right" delay={0.4}>
            <div className="fm-card news-card">
              <div className="card-top-decoration gold-border"></div>
              <div className="video-frame">
                <iframe 
                  src="https://www.youtube.com/embed/wkOhPb1denI" 
                  title="ATV Haber" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
                <div className="live-badge"><span className="dot"></span> ATV ANA HABER</div>
              </div>
              <div className="fm-card-content">
                <div className="news-header">
                  <FaQuoteRight className="news-icon"/>
                  <h3>"By-Pass ve Stent Tarihe Karışıyor"</h3>
                </div>
                <p className="highlight-desc">
                  Prof. Dr. Erzengin, ameliyatsız damar açma tedavisiyle kalp hastalıklarında yeni bir dönem başlattı.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* --- ORTALANMIŞ BUTON ALANI (Değişmedi) --- */}
        <ScrollReveal animation="fade-up" delay={0.5}>
            <div className="fm-action-wrapper">
                <Link to="/iletisim" className="fm-big-cta-btn">
                  <span>Hemen Randevu Al</span>
                  <div className="btn-icon-circle"><FaCalendarCheck /></div>
                </Link>
                <p className="fm-cta-note">Randevu ve detaylı bilgi için bize ulaşabilirsiniz.</p>
            </div>
        </ScrollReveal>

        {/* --- FOTOĞRAF KÖŞESİ / GALERİ (GÜNCELLENDİ) --- */}
        <ScrollReveal animation="fade-up" delay={0.6}>
          <div className="fm-gallery-section">
            
            <div className="gallery-header-row">
              <h3 className="gallery-title"><FaImages /> Fotoğraf Galerisi</h3>
              <div className="gallery-nav-buttons">
                <button className="g-nav-btn" onClick={scrollLeft} aria-label="Sola Kaydır"><FaChevronLeft /></button>
                <button className="g-nav-btn" onClick={scrollRight} aria-label="Sağa Kaydır"><FaChevronRight /></button>
              </div>
            </div>
            
            <div className="fm-gallery-track" ref={galleryRef}>
              {galleryImages.map((img) => (
                // GÜNCELLEME: onClick eklendi, caption box silindi
                <div 
                  key={img.id} 
                  className="fm-gallery-item clickable-gallery-item" 
                  onClick={() => openLightbox(img.src)}
                >
                  <div className="g-img-box">
                    <img src={img.src} alt={`Galeri Görseli ${img.id}`} />
                    {/* Hover efekti için overlay, üzerinde büyüteç ikonu çıkabilir */}
                    <div className="g-overlay">
                        <span className="zoom-hint">Büyütmek için tıklayın</span>
                    </div>
                  </div>
                  {/* ESKİ CAPTION BOX BURADAYDI, ARTIK YOK */}
                </div>
              ))}
            </div>

          </div>
        </ScrollReveal>

      </div>

      {/* --- YENİ: LIGHTBOX (TAM EKRAN RESİM MODALI) --- */}
      {selectedImage && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="lightbox-close-btn" onClick={closeLightbox}>
            <FaTimes />
          </button>
          {/* Resim kapsayıcısına tıklayınca kapanmasın diye stopPropagation */}
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Tam Ekran Görünüm" />
          </div>
        </div>
      )}

    </section>
  );
};

export default FeaturedMedia;