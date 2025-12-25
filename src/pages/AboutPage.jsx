import React, { useState, useEffect } from 'react';
import { FaUserMd, FaAward, FaMicroscope, FaBookReader, FaQuoteLeft, FaChevronLeft, FaChevronRight, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './AboutPage.css';

// 1. Animasyon Bileşeni (Yolunu düzeltmiştik)
import ScrollReveal from '../components/Animations/ScrollReveal';

// Data
import { publicationsData } from '../data/publicationsData';

// Resimler
import slide1 from '../assets/images/hakkimda1.png';
import slide2 from '../assets/images/hakkimda2.png';
import slide3 from '../assets/images/hakkimda3.png';

// Blog Resimleri
import articleImg1 from '../assets/images/blog/makale1.png'; 

const AboutPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openPubIndex, setOpenPubIndex] = useState(0); 

  const sliderImages = [ slide1, slide2, slide3 ];

  // Slider Mantığı
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === sliderImages.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [sliderImages.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev === sliderImages.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? sliderImages.length - 1 : prev - 1));

  // Accordion Mantığı
  const toggleAccordion = (index) => {
    if (openPubIndex === index) {
      setOpenPubIndex(-1); 
    } else {
      setOpenPubIndex(index); 
    }
  };

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const blogPosts = [
    { id: 1, title: "Kalp Sağlığınızı Korumak İçin 5 Altın Kural", date: "15 Ekim 2025", image: articleImg1, excerpt: "Kalp krizi riskini azaltmak için..." },
    { id: 2, title: "Hipertansiyon: Sessiz Katil Hakkında Bilmeniz Gerekenler", date: "02 Kasım 2025", image: articleImg1, excerpt: "Yüksek tansiyon belirti vermeden ilerleyebilir..." },
    { id: 3, title: "Diyabetik Ayak Yaralarında Ameliyatsız Çözüm", date: "20 Aralık 2025", image: articleImg1, excerpt: "Özel solüsyon tedavileri ile ampütasyon riskini önlüyoruz." }
  ];

  return (
    <div className="about-page">
      
      {/* HEADER - ARTIK ANİMASYONLU! */}
      <div className="page-header">
        <ScrollReveal animation="fade-up">
          <div className="container">
            <h1 className="page-title">Hakkımda</h1>
            <p className="breadcrumb">Ana Sayfa / Hakkımda</p>
          </div>
        </ScrollReveal>
      </div>

      <div className="container page-content">
        
        {/* 1. GİRİŞ BÖLÜMÜ (SLIDER + METİN) */}
        <div className="bio-section">
          
          {/* Slider Soldan Gelsin (CSS class eklendiği için küçülmez) */}
          <ScrollReveal animation="slide-in-left" className="slider-reveal-wrapper">
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
          </ScrollReveal>

          {/* Metin Sağdan Gelsin */}
          <ScrollReveal animation="slide-in-right" delay={0.2}>
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
          </ScrollReveal>
        </div>

        {/* 2. DETAYLI METİN BLOKLARI */}
        <div className="detailed-bio-wrapper">
           
           {/* BLOK 1 */}
           <ScrollReveal delay={0.1} animation="fade-up">
             <div className="content-block">
               <div className="block-header">
                 <FaAward className="block-icon" />
                 <h3 className="block-title">"Efsane Dekan" ve Akademik Liderlik</h3>
               </div>
               <p>
                 İstanbul Üniversitesi İstanbul Tıp Fakültesi (Çapa) tarihinde <strong>rekor oyla seçilen</strong> ve yönetim vizyonuyla "Efsane Dekan" unvanını kazanan Prof. Dr. Faruk Erzengin, görev süresi boyunca fakülteyi fiziksel ve bilimsel olarak çağ atlatmıştır.
               </p>
               <p className="sub-text">
                 Eğitimde fırsat eşitliğine verdiği önemle binlerce tıp öğrencisine burs imkanı sağlamış, <strong>"Hocaların Hocası"</strong> olarak yetiştirdiği binlerce uzman hekimle Türk tıbbının geleceğini şekillendirmiştir.
               </p>
             </div>
           </ScrollReveal>

           {/* BLOK 2 */}
           <ScrollReveal delay={0.3} animation="fade-up">
             <div className="content-block highlight-border">
               <div className="block-header">
                 <FaMicroscope className="block-icon" />
                 <h3 className="block-title">Tıpta Çığır Açan "Erzengin Metodları"</h3>
               </div>
               <p>
                 Prof. Dr. Erzengin, invaziv (girişimsel) yöntemlere alternatif olarak geliştirdiği medikal tedavilerle tanınır.
               </p>
               <ul className="custom-list">
                 <li>
                   <strong>Damar Sertliğinde Geri Dönüş:</strong> Damar tıkanıklığına yol açan plakları (aterom) özel tedavi protokolleriyle gerileterek, by-pass veya stent önerilen hastaları ameliyatsız iyileştirmiştir.
                 </li>
                 <li>
                   <strong>Diyabetik Ayak Kurtarıcısı:</strong> Kesilmesi (ampütasyon) planlanan diyabetik ayak yaralarını, kendi formülasyonu olan özel solüsyonlar ve tedavi yöntemleriyle iyileştirerek uzuv kaybını önlemiştir.
                 </li>
                 <li>
                   <strong>Hipertansiyon Yönetimi:</strong> Dirençli tansiyon vakalarında kişiye özel "kombine tedavi" yaklaşımlarıyla kalıcı regülasyon sağlamaktadır.
                 </li>
               </ul>
             </div>
           </ScrollReveal>

           {/* BLOK 3 */}
           <ScrollReveal delay={0.5} animation="fade-up">
             <div className="content-block cultural-block">
              <div className="block-header">
                <FaBookReader className="block-icon" />
                <h3 className="block-title">Bütüncül Yaklaşım ve İnsan Sevgisi</h3>
              </div>
              <p>
                Ona göre hekimlik sadece reçete yazmak değil, <strong>"Biyopsikososyal"</strong> bir sanattır. Hastayı sadece bir vaka olarak değil; ruhu, çevresi ve hikayesiyle bir "insan" olarak ele alır.
              </p>
              <p className="sub-text">
                Türk kültürüne, edebiyata ve sanata olan derin hakimiyeti, hasta iletişimindeki o güven verici ve babacan tavrın temelini oluşturur. Hastaları için o sadece bir doktor değil, her zaman ulaşabildikleri bir <strong>"Faruk Baba"</strong>dır.
              </p>
            </div>
           </ScrollReveal>

        </div>

        {/* 3. MOTTO */}
        <ScrollReveal animation="zoom-in" delay={0.2}>
          <div className="motto-section">
            <FaQuoteLeft className="quote-icon-large" />
            <h2 className="motto-text">"İnsan, atar damarları kadar yaşar."</h2>
            <p className="motto-author">- Prof. Dr. Faruk Erzengin</p>
          </div>
        </ScrollReveal>

        {/* 4. YAYINLAR */}
        <ScrollReveal animation="fade-up">
          <div className="publications-section">
            <h3 className="section-heading-center">Bilimsel Çalışmalar & Yayınlar</h3>
            <p className="section-desc-center">Prof. Dr. Faruk Erzengin'in literatüre kazandırdığı yüzlerce eserden seçmeler.</p>
            
            <div className="accordion-wrapper">
              {publicationsData.map((category, index) => (
                <div key={category.id} className={`accordion-item ${openPubIndex === index ? 'active' : ''}`}>
                  <div className="accordion-header" onClick={() => toggleAccordion(index)}>
                    <h4>{category.title}</h4>
                    <span className="accordion-icon">
                      {openPubIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                    </span>
                  </div>
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
        </ScrollReveal>

        {/* 5. BLOG */}
        <div className="blog-section-preview">
          <ScrollReveal animation="fade-up"><h3 className="section-heading-center">Güncel Sağlık Makaleleri</h3></ScrollReveal>
          <div className="blog-grid">
            {blogPosts.map((post, idx) => (
              <ScrollReveal key={post.id} delay={idx * 0.2} animation="fade-up">
                <div className="blog-card">
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
              </ScrollReveal>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;