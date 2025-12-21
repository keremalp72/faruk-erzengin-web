import React, { useState, useEffect } from 'react';
import { FaUserMd, FaAward, FaMicroscope, FaBookReader, FaQuoteLeft, FaChevronLeft, FaChevronRight, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './AboutPage.css';

// 1. DATA IMPORT (Yeni oluşturduğumuz dosyayı çağırıyoruz)
import { publicationsData } from '../data/publicationsData';

// SLIDER İÇİN RESİMLER
import slide1 from '../assets/images/hakkimda1.png';
import slide2 from '../assets/images/hakkimda2.png';
import slide3 from '../assets/images/hakkimda3.png';

// import slide2 from ... (Varsa ekle)
import articleImg1 from '../assets/images/blog/makale1.png'; // BURAYA KENDİ 1. RESİM DOSYA ADINI YAZ
import articleImg2 from '../assets/images/blog/makale1.png'; // BURAYA KENDİ 2. RESİM DOSYA ADINI YAZ
import articleImg3 from '../assets/images/blog/makale1.png'; // BURAYA KENDİ 3. RESİM DOSYA ADINI YAZ

const AboutPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // 2. ACCORDION STATE (Hangi başlığın açık olduğunu tutar)
  const [openPubIndex, setOpenPubIndex] = useState(0); // 0: İlk başlık açık gelir, -1 dersen hepsi kapalı gelir.

  const sliderImages = [ slide1,slide2,slide3 ];

  // Slider Mantığı
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === sliderImages.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [sliderImages.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev === sliderImages.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? sliderImages.length - 1 : prev - 1));

  // Accordion Aç/Kapa Fonksiyonu
  const toggleAccordion = (index) => {
    if (openPubIndex === index) {
      setOpenPubIndex(-1); // Açıksa kapat
    } else {
      setOpenPubIndex(index); // Kapalıysa aç (diğerlerini kapatır)
    }
  };

  useEffect(() => { window.scrollTo(0, 0); }, []);

  // --- BLOG VERİSİ (Aynı kaldı) ---
  const blogPosts = [
    { id: 1, title: "Kalp Sağlığınızı Korumak İçin 5 Altın Kural", date: "15 Ekim 2025", image: articleImg1, excerpt: "Kalp krizi riskini azaltmak için..." },
    { id: 2, title: "Hipertansiyon: Sessiz Katil Hakkında Bilmeniz Gerekenler", date: "02 Kasım 2025", image: articleImg1, excerpt: "Yüksek tansiyon belirti vermeden ilerleyebilir..." },
    { id: 3, title: "Diyabetik Ayak Yaralarında Ameliyatsız Çözüm", date: "20 Aralık 2025", image: articleImg1, excerpt: "Özel solüsyon tedavileri ile ampütasyon riskini önlüyoruz." }
  ];

  return (
    <div className="about-page">
      
      {/* HEADER */}
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Hakkımda</h1>
          <p className="breadcrumb">Ana Sayfa / Hakkımda</p>
        </div>
      </div>

      <div className="container page-content">
        
        {/* 1. GİRİŞ BÖLÜMÜ (SLIDER + METİN) - AYNI */}
        <div className="bio-section">
          <div className="bio-slider-container">
            <div className="bio-slider-wrapper" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {sliderImages.map((img, index) => (
                <div key={index} className="bio-slide"><img src={img} alt={`Slide ${index}`} /></div>
              ))}
            </div>
            <button className="slider-btn prev" onClick={prevSlide}><FaChevronLeft /></button>
            <button className="slider-btn next" onClick={nextSlide}><FaChevronRight /></button>
            <div className="slider-dots">
              {sliderImages.map((_, index) => (
                <span key={index} className={`dot ${currentSlide === index ? 'active' : ''}`} onClick={() => setCurrentSlide(index)}></span>
              ))}
            </div>
          </div>

          <div className="bio-text">
            <h2 className="section-title">Prof. Dr. <span className="gold-text">Faruk Erzengin</span></h2>
            <h4 className="section-subtitle">Bilim İnsanı, Hekim, Eğitimci ve Etik Öncüsü</h4>
            <p className="intro-paragraph">
              <strong>İstanbul Üniversitesi İstanbul Tıp Fakültesi’nin önceki dekanı</strong>, iç hastalıkları ve kardiyoloji uzmanı Prof. Dr. Faruk Erzengin, 
              modern kardiyolojinin gelişiminde öncü rol üstlenen bir tıp duayenidir.
            </p>
            <div className="highlight-box">
               <FaAward className="highlight-icon"/>
               <p>Prof. Dr. Faruk Erzengin ve ekibi, <strong>2025 Nobel Tıp Ödülü’ne aday gösterilmiştir.</strong></p>
            </div>
            <div className="bio-stats">
              <div className="stat-box"><span className="stat-number">30B+</span><span className="stat-label">Hasta</span></div>
              <div className="stat-box"><span className="stat-number">500+</span><span className="stat-label">Yayın</span></div>
              <div className="stat-box"><span className="stat-number">%99</span><span className="stat-label">Başarı</span></div>
            </div>
          </div>
        </div>

        {/* 2. DETAYLI METİN BLOKLARI - AYNI */}
        <div className="detailed-bio-wrapper">
           <div className="content-block">
             <div className="block-header"><FaMicroscope className="block-icon" /><h3 className="block-title">Tıp Literatüründe Çığır Açan Araştırmalar</h3></div>
             <p>1997 yılında başlatılan ve <strong>22.000’den fazla hasta</strong> üzerinde yürütülen bilimsel çalışmalarıyla...</p>
             <ul className="custom-list">
               <li>Koroner bypass cerrahisine gerek kalmadan <strong>%99 başarı oranı</strong>.</li>
               <li>Damar sertliğinin ilaçla tamamen ortadan kaldırılabileceği kanıtlanmıştır.</li>
               <li><strong>Diabetik ayak</strong> tedavisinde ampütasyon önlenmiştir.</li>
             </ul>
           </div>
           <div className="content-block cultural-block">
            <div className="block-header"><FaBookReader className="block-icon" /><h3 className="block-title">İnsani ve Kültürel Derinlik</h3></div>
            <p>Faruk Erzengin’in öyküsü yalnızca bir bilim kariyeri değildir...</p>
          </div>
        </div>

        {/* 3. MOTTO */}
        <div className="motto-section">
          <FaQuoteLeft className="quote-icon-large" />
          <h2 className="motto-text">"İnsan, atar damarları kadar yaşar."</h2>
          <p className="motto-author">- Prof. Dr. Faruk Erzengin</p>
        </div>

        {/* 4. YENİ BÖLÜM: BİLİMSEL YAYINLAR (ACCORDION YAPISI) */}
        <div className="publications-section">
          <h3 className="section-heading-center">Bilimsel Çalışmalar & Yayınlar</h3>
          <p className="section-desc-center">Prof. Dr. Faruk Erzengin'in literatüre kazandırdığı yüzlerce eserden seçmeler.</p>
          
          <div className="accordion-wrapper">
            {publicationsData.map((category, index) => (
              <div key={category.id} className={`accordion-item ${openPubIndex === index ? 'active' : ''}`}>
                
                {/* Başlık Kısmı (Tıklanabilir) */}
                <div className="accordion-header" onClick={() => toggleAccordion(index)}>
                  <h4>{category.title}</h4>
                  <span className="accordion-icon">
                    {openPubIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
                </div>

                {/* İçerik Kısmı (Gizli/Açık) */}
                <div className="accordion-content">
                  <ul className="publication-list">
                    {category.items.map((item, idx) => (
                      <li key={idx}>
                        <span className="pub-number">{idx + 1}.</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* 5. BLOG */}
        <div className="blog-section-preview">
          <h3 className="section-heading-center">Güncel Sağlık Makaleleri</h3>
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <div key={post.id} className="blog-card">
                <div className="blog-img-wrapper">
                  <img src={post.image} alt={post.title} />
                  <span className="blog-date">{post.date}</span>
                </div>
                <div className="blog-info">
                  <h4>{post.title}</h4>
                  <p>{post.excerpt}</p>
                  <button className="read-more-btn">Devamını Oku →</button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;