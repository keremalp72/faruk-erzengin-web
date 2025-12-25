import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Sabit Bileşenler
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// Sayfalar
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import BlogPage from './pages/BlogPage';
import PressPage from './pages/PressPage';
import ReviewsPage from './pages/ReviewsPage';
import ContactPage from './pages/ContactPage';

import './App.css';

// --- YARDIMCI BİLEŞEN: Sayfa Başlığını ve Scroll'u Yönetir ---
// Bu bileşeni App'in içinde Router'ın altına koyacağız.
const PageMeta = () => {
  const location = useLocation();

  useEffect(() => {
    // 1. SAYFA BAŞLIĞINI AYARLA
    const siteSuffix = " | Prof. Dr. Faruk Erzengin";
    
    switch (location.pathname) {
      case '/':
        document.title = "Prof. Dr. Faruk Erzengin | Kardiyolog ve İç Hastalıkları Uzmanı";
        break;
      case '/hakkimda':
        document.title = "Hakkımda" + siteSuffix;
        break;
      case '/tedaviler':
        document.title = "Tedaviler ve Uzmanlıklar" + siteSuffix;
        break;
        case '/blog':
        document.title = "Blog" + siteSuffix;
        break;
      case '/basin':
        document.title = "Basın ve Medya" + siteSuffix;
        break;
      case '/yorumlar':
        document.title = "Hasta Yorumları" + siteSuffix;
        break;
      case '/iletisim':
        document.title = "İletişim" + siteSuffix;
        break;
      default:
        document.title = "Prof. Dr. Faruk Erzengin";
    }

    // 2. SAYFA DEĞİŞİNCE EN YUKARI KAYDIR
    window.scrollTo(0, 0);

  }, [location]); // Her URL değiştiğinde çalışır

  return null; // Bu bileşen ekrana bir şey çizmez, sadece iş yapar.
};


function App() {
  return (
    <Router>
      {/* PageMeta Router'ın içinde olmalı ki useLocation çalışsın */}
      <PageMeta /> 

      <div className="App">
        <Header /> 
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hakkimda" element={<AboutPage />} />
            <Route path="/tedaviler" element={<ServicesPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/basin" element={<PressPage />} />
            <Route path="/yorumlar" element={<ReviewsPage />} />
            <Route path="/iletisim" element={<ContactPage />} />
          </Routes>
        </main>

        <Footer /> 
      </div>
    </Router>
  );
}

export default App;