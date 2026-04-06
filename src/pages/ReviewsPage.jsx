import React, { useRef, useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import { FaStar, FaQuoteRight, FaGoogle, FaCheckCircle, FaChevronDown } from 'react-icons/fa';
import './ReviewsPage.css';
import ScrollReveal from '../components/Animations/ScrollReveal';
import SEO from '../components/SEO';
import { Helmet } from 'react-helmet-async';

const ReviewsPage = () => {
  const sliderRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [loading, setLoading] = useState(true);
  const [reviewsData, setReviewsData] = useState([]);
  
  // Google yorumlarını başlangıçta 3 tane göster
  const [visibleGoogleCount, setVisibleGoogleCount] = useState(3);
  const [expandedReviews, setExpandedReviews] = useState({});

  // --- 1. VERİYİ AYIRIYORUZ ---
  const googleReviews = reviewsData.filter(item => item.source === "google");
  const websiteReviews = reviewsData.filter(item => item.source === "website");

  const toggleReadMore = (id) => {
    setExpandedReviews(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const renderComment = (comment, id) => {
    if (!comment || comment.trim() === "") {
      return <span className="no-comment-text">*(Yazılı yorum yapılmadı, puan verildi)</span>;
    }

    const maxLength = 140;
    const isExpanded = expandedReviews[id];

    if (comment.length <= maxLength) {
      return `"${comment}"`;
    }

    return (
      <>
        "{isExpanded ? comment : `${comment.substring(0, maxLength)}...`}"
        <button 
          className="btn-read-more-text" 
          onClick={(e) => { e.stopPropagation(); toggleReadMore(id); }}
        >
          {isExpanded ? " (Küçült)" : " (Devamını Oku)"}
        </button>
      </>
    );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    setLoading(true);
    const { data, error } = await supabase.from('reviews').select('*').order('created_at', { ascending: false });
    if (error) {
      console.error("Yorumlar yüklenemedi:", error);
    } else {
      setReviewsData(data || []);
    }
    setLoading(false);
  };

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

  // Review Schema için hesaplamalar
  const totalReviews = reviewsData.length;
  const averageRating = totalReviews > 0 ? (reviewsData.reduce((sum, review) => sum + review.rating, 0) / totalReviews) : 5;
  const siteUrl = "https://farukerzengin.com";

  // Aggregate Rating Schema
  const aggregateRatingSchema = totalReviews > 0 ? {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Prof. Dr. Faruk Erzengin - Kardiyoloji ve İç Hastalıkları",
    "url": siteUrl,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": averageRating.toFixed(1),
      "reviewCount": totalReviews,
      "bestRating": "5",
      "worstRating": "1"
    }
  } : null;

  // Individual Reviews Schema (ilk 5 yorum)
  const individualReviewsSchema = reviewsData.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Prof. Dr. Faruk Erzengin",
    "review": reviewsData.slice(0, 5).map(review => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.name
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating,
        "bestRating": "5",
        "worstRating": "1"
      },
      "reviewBody": review.comment || "Puan verildi, yazılı yorum yapılmadı."
    }))
  } : null;

  return (
    <div className="reviews-page">
      
      <SEO 
        title="Hasta Yorumları" 
        description="Prof. Dr. Faruk Erzengin hakkında gerçek hasta yorumları ve Google değerlendirmeleri. Tedavi deneyimleri ve hasta görüşleri." 
        url="https://farukerzengin.com/yorumlar"
        keywords="faruk erzengin yorumlar, hasta deneyimleri, kardiyolog değerlendirme, doktor yorumları, tedavi başarı oranı"
        breadcrumbs={[
          { name: "Ana Sayfa", url: "/" },
          { name: "Yorumlar", url: "/yorumlar" }
        ]}
      />

      {/* Review Schema */}
      <Helmet>
        {aggregateRatingSchema && (
          <script type="application/ld+json">
            {JSON.stringify(aggregateRatingSchema)}
          </script>
        )}
        {individualReviewsSchema && (
          <script type="application/ld+json">
            {JSON.stringify(individualReviewsSchema)}
          </script>
        )}
      </Helmet>

      {/* 1. HERO BÖLÜMÜ */}
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

      {/* 2. SLIDER BÖLÜMÜ (Sadece Web Sitesi Hikayeleri) */}
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
              {loading ? (
                 <p style={{padding:"2rem", textAlign:"center"}}>Yorumlar yükleniyor...</p>
              ) : (
                <>
                  {/* BURADA 'websiteReviews' KULLANIYORUZ */}
                  {websiteReviews.map((review) => (
                    <div key={review.id} className="slide-card-wrap">
                      <div className="review-card-item">
                        <FaQuoteRight className="card-quote-bg" />
                        
                        <div className="card-stars-line">
                          {renderStars(review.rating)}
                        </div>
                        
                        <p className="card-comment-text">{renderComment(review.comment, review.id)}</p>
                        
                        <div className="card-bottom-info">
                          <div className="patient-details">
                            <h4>{review.name}</h4>
                            <span className="treatment-tag"><FaCheckCircle/> {review.treatment}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 3. GOOGLE BÖLÜMÜ (Sadece Google Yorumları) */}
      <section className="reviews-google-section">
        <div className="reviews-container">
          
          <ScrollReveal animation="slide-in-right" delay={0.2}>
            <div className="google-cta-banner">
              <div className="cta-left">
                <div className="cta-icon-box"><FaGoogle /></div>
                <div className="cta-text-box">
                  <h2>Google'da Bizi Değerlendirin</h2>
                  <p>Şeffaf, sansürsüz ve gerçek hasta deneyimleri.</p>
                </div>
              </div>
              <a href="https://www.google.com/search?sca_esv=a7ea5b6f397deb12&q=Dr.+Faruk+erzengin+Yorumlar&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIyMjQztjS0NDQyNTe0MDExMDLawMj4ilHapUhPwS2xqDRbIbWoKjUvPTNPITK_qDQ3J7FoESs-WQAU3qj2VQAAAA&rldimm=216391912571844022&tbm=lcl&hl=tr-TR&sa=X&ved=2ahUKEwjh06iqh-GRAxVqQvEDHc70II4Q9fQKegQIJxAG&biw=1920&bih=919&dpr=1#lkt=LocalPoiReviews" target="_blank" rel="noreferrer" className="btn-google-link">
                Yorum Yapın
              </a>
            </div>
          </ScrollReveal>

          {loading ? (
            <p style={{textAlign:'center', marginTop: '2rem'}}>Yorumlar yükleniyor...</p>
          ) : (
            <>
              {/* BURADA 'googleReviews' KULLANIYORUZ */}
              <div className="google-reviews-grid">
                {googleReviews.slice(0, visibleGoogleCount).map((item, index) => (
                  <ScrollReveal key={item.id} animation="fade-up" delay={(index % 3) * 0.1}>
                    <div className="google-review-box">
                      <div className="gr-header">
                        <div className="gr-avatar">{item.name.charAt(0)}</div>
                        <div className="gr-meta">
                          <strong>{item.name}</strong>
                          <span className="gr-date">{item.date}</span>
                        </div>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google Yorumu Logosu" loading="lazy" className="gr-logo-small" />
                      </div>
                      <div className="gr-stars">{renderStars(item.rating)}</div>
                      <p className="gr-comment">{renderComment(item.comment, item.id)}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              {/* Daha Fazla Yükle Butonu */}
              {visibleGoogleCount < googleReviews.length && (
                <div className="load-more-wrapper">
                  <button className="btn-load-more-reviews" onClick={handleLoadMore}>
                    Daha Fazla Yükle <FaChevronDown />
                  </button>
                </div>
              )}
            </>
          )}

        </div>
      </section>

    </div>
  );
};

export default ReviewsPage;