import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion } from "framer-motion";
import "./FloatingScrollButton.css";

const FloatingScrollButton = () => {
  const [showScrollUp, setShowScrollUp] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  // Anasayfada mıyız kontrol et
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const isAtBottom =
        window.innerHeight + scrollY >=
        document.documentElement.scrollHeight - 100;

      // Anasayfada: sayfa aşağı kaydırıldığında görünür, en üstte kaybolur
      if (isHomePage) {
        setIsVisible(scrollY > 100);
      } else {
        // Diğer sayfalarda her zaman görünür
        setIsVisible(true);
      }

      // En altta yukarı ok göster
      setShowScrollUp(isAtBottom);
    };

    // İlk yüklemede kontrol et
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  // Sayfa değiştiğinde state'leri sıfırla
  useEffect(() => {
    if (isHomePage) {
      setIsVisible(window.scrollY > 100);
    } else {
      setIsVisible(true);
    }
    setShowScrollUp(false);
  }, [location.pathname, isHomePage]);

  const scrollDown = () => {
    window.scrollTo({
      top: window.scrollY + window.innerHeight,
      behavior: "smooth",
    });
  };

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Görünür değilse hiçbir şey render etme
  if (!isVisible) return null;

  return (
    <motion.button
      className="floating-scroll-btn"
      onClick={showScrollUp ? scrollUp : scrollDown}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label={showScrollUp ? "Yukarı Git" : "Daha Fazla Bilgi"}
    >
      <span className="floating-btn-text">
        {showScrollUp ? "Yukarı" : "Daha Fazla"}
      </span>
      <motion.div
        className="floating-btn-icon"
        animate={{ y: showScrollUp ? [0, -5, 0] : [0, 5, 0] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
      >
        {showScrollUp ? <FaChevronUp /> : <FaChevronDown />}
      </motion.div>
    </motion.button>
  );
};

export default FloatingScrollButton;
