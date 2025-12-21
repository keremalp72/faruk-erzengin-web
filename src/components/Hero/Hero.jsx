import React from 'react';
import heroBg from '../../assets/images/hero-bg.png'; // Doğru resim yolu
import { FaPlay } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    // BURAYI GÜNCELLE: style prop'u ile arka planı veriyoruz
    <section 
      className="hero-wrapper" 
      id="home"
      style={{ 
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      
      {/* Karartma efekti (Opsiyonel ama tavsiye edilir) */}
      <div className="hero-overlay"></div>

      <div className="hero-container">
        <div className="hero-content">
          
          <span className="hero-badge">
            Kardiyolog ve İç Hastalıkları Uzmanı
          </span>
          
          <h1 className="hero-title">
            <span className="title-prefix">Prof. Dr.</span> 
            Faruk Erzengin
          </h1>
          
          <p className="hero-description">
            40 yılı aşkın akademik birikim, binlerce vaka tecrübesi ve 
            insan odaklı yaklaşım ile sağlığınız güvenilir ellerde.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="btn-primary">Randevu Oluştur</a>
            <a href="/hakkimda" className="btn-secondary">Özgeçmişi İncele</a> {/* href düzeltildi */}
          </div>

          <div className="video-link-wrapper">
             <a 
               href="https://www.youtube.com/watch?v=gD-7bmIkBp0" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="video-link"
             >
                <div className="play-icon-circle">
                  <FaPlay />
                </div>
                <span>Prof. Dr. Faruk Erzengin Kimdir?</span>
             </a>
          </div>

        </div>
      </div>

    </section>
  );
};

export default Hero;