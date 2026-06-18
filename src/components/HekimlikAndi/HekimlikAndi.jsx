import React, { useState } from 'react';
import { FaDownload, FaTimes, FaSearchPlus } from 'react-icons/fa';
import ScrollReveal from '../Animations/ScrollReveal';
import hekimlikAndiImg from '../../assets/images/hekimlikbildirgesi.jpeg';
import './HekimlikAndi.css';

const HekimlikAndi = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <>
      <ScrollReveal animation="fade-up" delay={0.2}>
        <div className="hekimlik-andi-section">
          <h3 className="ha-section-heading-center">Hekimlik Andı</h3>
          <p className="ha-section-desc-center">
            Dünya Tabipler Birliği Cenevre Bildirgesi — Tüm hekimlerin mesleki etik değerlerini temsil eden evrensel and.
          </p>
          <div className="hekimlik-andi-card">
            <div className="hekimlik-andi-img-wrapper" onClick={() => setIsLightboxOpen(true)}>
              <img 
                src={hekimlikAndiImg} 
                alt="Dünya Tabipler Birliği Cenevre Bildirgesi - Hekimlik Andı" 
                loading="lazy"
              />
              <div className="hekimlik-andi-overlay">
                <FaSearchPlus className="overlay-icon" />
                <span>Büyütmek için tıklayın</span>
              </div>
            </div>
            <div className="hekimlik-andi-actions">
              <a 
                href={hekimlikAndiImg} 
                download="Hekimlik-Andi-Cenevre-Bildirgesi.jpeg" 
                className="hekimlik-download-btn"
              >
                <FaDownload /> Görseli İndir
              </a>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div className="lightbox-overlay" onClick={() => setIsLightboxOpen(false)}>
          <button className="lightbox-close" onClick={() => setIsLightboxOpen(false)}>
            <FaTimes />
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img 
              src={hekimlikAndiImg} 
              alt="Dünya Tabipler Birliği Cenevre Bildirgesi - Hekimlik Andı" 
            />
          </div>
        </div>
      )}
    </>
  );
};

export default HekimlikAndi;
