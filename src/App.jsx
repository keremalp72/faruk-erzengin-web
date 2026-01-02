import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// 1. Google Analytics Kütüphanesini Çağırıyoruz
import ReactGA from "react-ga4";

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
import BlogPostDetail from './pages/BlogPostDetail'; 

import './App.css';

// --- BURASI ÖNEMLİ: Kendi Ölçüm Kimliğini Buraya Yaz ---
// Google Analytics panelinden aldığın "G-" ile başlayan kodu buraya yapıştır.
const TRACKING_ID = "G-KLKWN88Q9G"; 

// --- GÜNCELLENMİŞ PAGE META ---
// Bu bileşen hem sayfayı yukarı kaydıracak hem de Google'a "Sayfa Görüntülendi" sinyali atacak.
const PageMeta = () => {
  const location = useLocation();

  useEffect(() => {
    // 1. Sayfa değişince Analytics'e bildir
    // ReactGA.initialize burada değil, aşağıda App içinde yapılıyor.
    ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });

    // 2. Sayfayı en üste kaydır
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

function App() {

  // --- ANALYTICS BAŞLATMA ---
  // Uygulama ilk açıldığında sadece 1 kere çalışır.
  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
  }, []);

  return (
    <Router>
      {/* PageMeta artık her sayfa değişimini takip ediyor */}
      <PageMeta /> 
      <div className="App">
        <Header /> 
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hakkinda" element={<AboutPage />} />
            <Route path="/tedaviler" element={<ServicesPage />} />
            
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<BlogPostDetail />} />

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