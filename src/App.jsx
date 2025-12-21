import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Sabit Bileşenler
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// Sayfalar
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';

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
          </Routes>
        </main>

        <Footer /> {/* Footer her sayfada sabit */}
      </div>
    </Router>
  );
}

export default App;