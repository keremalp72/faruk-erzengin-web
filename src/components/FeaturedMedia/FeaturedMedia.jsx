import React, { useState, useRef } from 'react';
import './FeaturedMedia.css';
import { FaQuoteRight, FaCalendarCheck, FaChevronLeft, FaChevronRight, FaImages, FaTimes } from 'react-icons/fa';
import ScrollReveal from '../Animations/ScrollReveal';
import { Link } from 'react-router-dom';

// Resim Importları
import img1 from '../../assets/images/aboutme/about12-min.png';
import img2 from '../../assets/images/aboutme/about10-min.png';
import img3 from '../../assets/images/aboutme/about9-min.png';
import img4 from '../../assets/images/aboutme/about7-min.png';
import img5 from '../../assets/images/aboutme/about1-min.png';
import img6 from '../../assets/images/aboutme/about13-min.png';
import img7 from '../../assets/images/aboutme/about14-min.png';
import img8 from '../../assets/images/aboutme/about6-min.png';
import img9 from '../../assets/images/aboutme/about2-min.png';
import img10 from '../../assets/images/aboutme/about17-min.png';
import img11 from '../../assets/images/aboutme/about16-min.png';
import img12 from '../../assets/images/aboutme/about3-min.png';
import img13 from '../../assets/images/aboutme/about4-min.png';
import img14 from '../../assets/images/aboutme/about5-min.png';
import img15 from '../../assets/images/aboutme/about15-min.png';
import img16 from '../../assets/images/aboutme/about11-min.png';
import img17 from '../../assets/images/aboutme/about8-min.png';

const FeaturedMedia = () => {
  const galleryRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    { id: 1, src: img1 },
    { id: 2, src: img2 },
    { id: 3, src: img3 },
    { id: 4, src: img4 },
    { id: 5, src: img5 },
    { id: 6, src: img6 },
    { id: 7, src: img7 },
    { id: 8, src: img8 },
    { id: 9, src: img9 },
    { id: 10, src: img10 },
    { id: 11, src: img11 },
    { id: 12, src: img12 },
    { id: 13, src: img13 },
    { id: 14, src: img14 },
    { id: 15, src: img15 },
    { id: 16, src: img16 },
    { id: 17, src: img17 },
  ];

  const scrollLeft = () => {
    if (galleryRef.current) galleryRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    if (galleryRef.current) galleryRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  const openLightbox = (imgSrc) => {
    setSelectedImage(imgSrc);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section className="fm-section">
      <div className="fm-bg-blur blur-1"></div>
      <div className="fm-bg-blur blur-2"></div>

      <div className="container fm-container-padding">
        
        {/* --- TITLE --- */}
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

        {/* --- VIDEO GRID (TEKRAR 2 SÜTUN) --- */}
        <div className="fm-grid">
          
          {/* 1. VIDEO: Biography */}
          <ScrollReveal animation="fade-up" delay={0.1}>
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

          {/* 2. VIDEO: ATV News */}
          <ScrollReveal animation="fade-up" delay={0.2}>
            <div className="fm-card news-card">
              <div className="card-top-decoration gold-border"></div>
              <div className="video-frame">
                <iframe 
                  src="https://www.youtube.com/embed/wkOhPb1denI" 
                  title="ATV Haber" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
              <div className="fm-card-content">
                <div className="news-header">
                  <h3>By-Pass ve Stent Tarihe Karışıyor</h3>
                </div>
                <p>
                  Prof. Dr. Erzengin, ameliyatsız damar açma tedavisiyle kalp hastalıklarında yeni bir dönem başlattı.
                </p>
              </div>
            </div>
          </ScrollReveal>

        </div>

        {/* --- BUTTON AREA --- */}
        <ScrollReveal animation="fade-up" delay={0.4}>
            <div className="fm-action-wrapper">
                <Link to="/iletisim" className="fm-big-cta-btn">
                  <span>Hemen Randevu Al</span>
                  <div className="btn-icon-circle"><FaCalendarCheck /></div>
                </Link>
                <p className="fm-cta-note">Randevu ve detaylı bilgi için bize ulaşabilirsiniz.</p>
            </div>
        </ScrollReveal>

        {/* --- PHOTO GALLERY --- */}
        <ScrollReveal animation="fade-up" delay={0.5}>
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
                <div 
                  key={img.id} 
                  className="fm-gallery-item clickable-gallery-item" 
                  onClick={() => openLightbox(img.src)}
                >
                  <div className="g-img-box">
                    <img src={img.src} alt={`Prof. Dr. Faruk Erzengin - Galeri Görseli ${img.id}`} />
                    <div className="g-overlay">
                        <span className="zoom-hint">Büyütmek için tıklayın</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

      </div>

      {/* --- LIGHTBOX --- */}
      {selectedImage && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="lightbox-close-btn" onClick={closeLightbox}>
            <FaTimes />
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Prof. Dr. Faruk Erzengin - Galeri Görseli Tam Ekran" />
          </div>
        </div>
      )}

    </section>
  );
};

export default FeaturedMedia;