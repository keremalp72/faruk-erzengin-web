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

// --- YENİ EKLENEN IMPORT ---
import BlogPostDetail from './pages/BlogPostDetail'; 

import './App.css';

// ... (PageMeta bileşeni aynı kalabilir, buraya tekrar yazıp kalabalık etmiyorum) ...
// Eğer PageMeta kodun silindiyse önceki mesajımdan alabilirsin.

const PageMeta = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
};

function App() {
  return (
    <Router>
      <PageMeta /> 
      <div className="App">
        <Header /> 
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hakkinda" element={<AboutPage />} />
            <Route path="/tedaviler" element={<ServicesPage />} />
            
            {/* BLOG ANA SAYFASI */}
            <Route path="/blog" element={<BlogPage />} />

            {/* --- İŞTE BU SATIR ÇOK ÖNEMLİ (Detay Sayfası Rotası) --- */}
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