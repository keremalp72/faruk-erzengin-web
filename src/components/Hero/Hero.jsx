import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaPlay, FaChevronRight } from 'react-icons/fa';
import heroBg from '../../assets/images/hero-bg.png';
import './Hero.css';

// --- ANİMASYON AYARLARI (Genel Kapsayıcı İçin) ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Ana elemanlar 0.3sn arayla gelsin
      delayChildren: 0.5    // Sayfa açıldıktan sonra başlama süresi
    }
  }
};

// Ana elemanların (Başlık, Butonlar vb.) yukarı kayarak gelmesi
const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

// --- YENİ: DAKTİLO EFEKTİ VARYANTLARI ---
const badgeText = "Kardiyolog ve İç Hastalıkları Uzmanı";

// Cümlenin tamamını kapsayan varyant (Harfleri sıraya sokar)
const typewriterSentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.8, // Ana blok geldikten biraz sonra başlasın
      staggerChildren: 0.04, // Harfler arası bekleme süresi (Hız ayarı)
    },
  },
};

// Tek bir harfin varyantı
const typewriterLetter = {
  hidden: { opacity: 0, y: 5 },
  visible: {
    opacity: 1,
    y: 0,
  },
};


const Hero = () => {
  return (
    <section className="hero-section" id="home">
      
      {/* ARKA PLAN (Zoom Animasyonu) */}
      <div className="hero-bg-wrapper">
        <img src={heroBg} alt="Prof. Dr. Faruk Erzengin" className="hero-bg-img" />
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-container">
        
        {/* İÇERİK KAPSAYICISI */}
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          
          {/* 1. ROZET (DAKTİLO ANİMASYONLU) */}
          <motion.div variants={itemVariants} className="hero-badge-wrapper">
            <motion.span 
              className="hero-badge"
              variants={typewriterSentence} // Cümle varyantını buraya atadık
              // initial="hidden" ve animate="visible" üstteki parent'tan miras alınır
            >
              {/* Metni harflerine ayırıp (split) döngüye sokuyoruz */}
              {badgeText.split("").map((char, index) => (
                <motion.span key={index} variants={typewriterLetter}>
                  {char}
                </motion.span>
              ))}
            </motion.span>
          </motion.div>
          
          {/* 2. Başlık */}
          <motion.h1 variants={itemVariants} className="hero-title">
            <span className="title-prefix">Prof. Dr.</span>
            Faruk Erzengin
          </motion.h1>
          
          {/* 3. Açıklama */}
          <motion.p variants={itemVariants} className="hero-description">
            40 yılı aşkın akademik birikim, binlerce vaka tecrübesi ve 
            insan odaklı yaklaşım ile sağlığınız güvenilir ellerde.
          </motion.p>

          {/* 4. Butonlar */}
          <motion.div variants={itemVariants} className="hero-buttons">
            <Link to="/iletisim" className="btn-primary">
              Randevu Oluştur <FaChevronRight className="btn-arrow"/>
            </Link>
            <Link to="/hakkimda" className="btn-secondary">
              Özgeçmişi İncele
            </Link>
          </motion.div>

          {/* 5. Video Linki */}
          <motion.div variants={itemVariants} className="video-link-wrapper">
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
          </motion.div>

        </motion.div>
      </div>

    </section>
  );
};

export default Hero;