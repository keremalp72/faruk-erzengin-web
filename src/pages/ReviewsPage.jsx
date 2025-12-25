import React, { useRef, useState, useEffect } from 'react';
import { reviewsData } from '../data/reviewsData';
import { FaStar, FaQuoteRight, FaGoogle, FaCheckCircle, FaChevronDown } from 'react-icons/fa';
import './ReviewsPage.css';

// 1. Animasyon Bileşenini Import Ediyoruz
import ScrollReveal from '../components/Animations/ScrollReveal';

const ReviewsPage = () => {
  const sliderRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [visibleGoogleCount, setVisibleGoogleCount] = useState(3);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // --- Slider Mouse Olayları ---
  const handleMouseDown = (e) => {
    setIsDown(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };
  const handleMouseLeave = () => setIsDown(false);
  const handleMouseUp = () => setIsDown(false);
  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const renderStars = (count) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar key={i} className={i < count ? "star-filled" : "star-empty"} />
    ));
  };

  const handleLoadMore = () => {
    setVisibleGoogleCount(prev => prev + 3);
  };

  return (
    <div className="reviews-page">
      
      {/* 1. HERO BÖLÜMÜ - Fade In Up */}
      <header className="reviews-hero-section">
        <ScrollReveal animation="fade-up">
          <div className="reviews-hero-content">
            <h1 className="reviews-hero-title">Gerçek Hikayeler,<br />Mutlu Başlangıçlar</h1>
            <p className="reviews-hero-desc">
              Tıbbi tecrübemizi insani değerlerle birleştiriyoruz. İşte hastalarımızın kaleminden dökülenler.
            </p>
          </div>
        </ScrollReveal>
      </header>

      {/* 2. SLIDER BÖLÜMÜ - Fade In */}
      <section className="reviews-slider-section">
        <ScrollReveal animation="fade-up" delay={0.2}>
          <div 
            className="slider-drag-area"
            ref={sliderRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            <div className="slider-track-row">
              {reviewsData.map((review) => (
                <div key={review.id} className="slide-card-wrap">
                  <div className="review-card-item">
                    <FaQuoteRight className="card-quote-bg" />
                    
                    <div className="card-stars-line">
                      {renderStars(review.rating)}
                    </div>
                    
                    <p className="card-comment-text">"{review.comment}"</p>
                    
                    <div className="card-bottom-info">
                      <div className="patient-details">
                        <h4>{review.name}</h4>
                        <span className="treatment-tag"><FaCheckCircle/> {review.treatment}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 3. GOOGLE BÖLÜMÜ */}
      <section className="reviews-google-section">
        <div className="reviews-container">
          
          {/* Google Banner - Sağdan Gelir */}
          <ScrollReveal animation="slide-in-right" delay={0.2}>
            <div className="google-cta-banner">
              <div className="cta-left">
                <div className="cta-icon-box"><FaGoogle /></div>
                <div className="cta-text-box">
                  <h2>Google'da Bizi Değerlendirin</h2>
                  <p>Şeffaf, sansürsüz ve gerçek hasta deneyimleri.</p>
                </div>
              </div>
              <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="btn-google-link">
                Yorum Yapın
              </a>
            </div>
          </ScrollReveal>

          {/* Google Yorumları Grid - Sırayla Gelir (Staggered) */}
          <div className="google-reviews-grid">
            {reviewsData.slice(0, visibleGoogleCount).map((item, index) => (
              // index % 3 yaparak her satırda animasyonun tekrar baştan başlamasını değil,
              // yüklenen kadarının akıcı gelmesini sağlıyoruz.
              <ScrollReveal key={item.id} animation="fade-up" delay={(index % 3) * 0.1}>
                <div className="google-review-box">
                  <div className="gr-header">
                    <div className="gr-avatar">{item.name.charAt(0)}</div>
                    <div className="gr-meta">
                      <strong>{item.name}</strong>
                      <span className="gr-date">{item.date}</span>
                    </div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="G" className="gr-logo-small" />
                  </div>
                  <div className="gr-stars">{renderStars(item.rating)}</div>
                  <p className="gr-comment">{item.comment}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Daha Fazla Yükle Butonu */}
          {visibleGoogleCount < reviewsData.length && (
            <div className="load-more-wrapper">
              <button className="btn-load-more-reviews" onClick={handleLoadMore}>
                Daha Fazla Yükle <FaChevronDown />
              </button>
            </div>
          )}

        </div>
      </section>

    </div>
  );
};

export default ReviewsPage;