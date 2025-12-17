import React from 'react';
import { FaPlay } from 'react-icons/fa'; // Play ikonunu import ettik
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-wrapper" id="home">
      
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

          {/* Ana Butonlar */}
          <div className="hero-buttons">
            <a href="#contact" className="btn-primary">Randevu Oluştur</a>
            <a href="#about" className="btn-secondary">Özgeçmişi İncele</a>
          </div>

          {/* YENİ: Video Linki */}
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