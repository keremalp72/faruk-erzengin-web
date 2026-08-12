import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaPlay, FaChevronRight, FaChevronDown } from "react-icons/fa";
import heroBg from "../../assets/images/homepage/hero-bg.png";
import "./Hero.css";

// --- ANİMASYON AYARLARI ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.5 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

// Daktilo Efekti
const badgeText = "İç Hastalıkları ve Kalp - Damar Hastalıkları Uzmanı";

const typewriterSentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { delayChildren: 0.8, staggerChildren: 0.04 },
  },
};

const typewriterLetter = {
  hidden: { opacity: 0, y: 5 },
  visible: { opacity: 1, y: 0 },
};

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      {/* ARKA PLAN */}
      <div className="hero-bg-wrapper">
        <img
          src={heroBg}
          alt="Prof. Dr. Faruk Erzengin - İç Hastalıkları ve Kalp Damar Hastalıkları Uzmanı Ana Sayfa Görseli"
          className="hero-bg-img"
          fetchpriority="high"
          decoding="async"
          width="1920"
          height="1080"
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* 1. ROZET (Unvan) */}
          <motion.div variants={itemVariants} className="hero-badge-wrapper">
            <motion.span className="hero-badge" variants={typewriterSentence}>
              {badgeText.split("").map((char, index) => (
                <motion.span key={index} variants={typewriterLetter}>
                  {char}
                </motion.span>
              ))}
            </motion.span>
          </motion.div>

          {/* 2. BAŞLIK (İsim) — SEO için doğrudan <h1>, opacity:1 ile başlar.
              Google botu animasyon çalıştırmasa bile H1'i görür. */}
          <h1 className="hero-title">
            <span className="title-prefix">Prof. Dr.</span>
            <motion.span
              variants={itemVariants}
              style={{ display: 'block' }}
            >
              Faruk Erzengin
            </motion.span>
          </h1>

          {/* 3. VİDEO LİNKİ (Sıralamada üste alındı) */}
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

          {/* 4. RANDEVU BUTONU (En alta alındı) */}
          <motion.div variants={itemVariants} className="hero-buttons">
            <Link to="/iletisim" className="btn-primary">
              Randevu Oluştur <FaChevronRight className="btn-arrow" />
            </Link>
            {/* Özgeçmiş butonu kaldırıldı */}
          </motion.div>

          {/* 5. SCROLL INDICATOR (Mobil/Tablet için) */}
          <motion.div
            variants={itemVariants}
            className="scroll-indicator"
            onClick={() =>
              window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
            }
          >
            <span className="scroll-indicator-text">Daha fazla bilgi</span>
            <motion.div
              className="scroll-arrow"
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <FaChevronDown />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
