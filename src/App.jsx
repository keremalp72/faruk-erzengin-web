import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Sabit Bileşenler
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// Sayfalar
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PressPage from './pages/PressPage';
import ReviewsPage from './pages/ReviewsPage';
import ContactPage from './pages/ContactPage';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header /> {/* Header her sayfada sabit */}
        
        <main>
          <Routes>
            {/* "/" adresine gelince Home sayfasını göster */}
            <Route path="/" element={<Home />} />
            
            {/* "/hakkimda" adresine gelince AboutPage sayfasını göster */}
            <Route path="/hakkimda" element={<AboutPage />} />
            <Route path="/tedaviler" element={<ServicesPage />} />
            <Route path="/basin" element={<PressPage />} />
            <Route path="/yorumlar" element={<ReviewsPage />} />
            <Route path="/iletisim" element={<ContactPage />} />
          </Routes>
        </main>

        <Footer /> {/* Footer her sayfada sabit */}
      </div>
    </Router>
  );
}

export default App;