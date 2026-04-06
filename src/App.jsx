import React, { useEffect, Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

// 1. Google Analytics Kütüphanesi
import ReactGA from "react-ga4";
import { supabase } from "./lib/supabaseClient";

// Sabit Bileşenler (Bunlar hemen yüklenmeli, o yüzden normal import)
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import FloatingScrollButton from "./components/FloatingScrollButton/FloatingScrollButton";

import "./App.css";

// --- LAZY LOADING IMPORTLARI ---
// Sayfaları sadece kullanıcı ihtiyaç duyduğunda yükleyeceğiz
const Home = lazy(() => import("./pages/Home"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const BlogPostDetail = lazy(() => import("./pages/BlogPostDetail"));
const PressPage = lazy(() => import("./pages/PressPage"));
const ReviewsPage = lazy(() => import("./pages/ReviewsPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const Admin = lazy(() => import("./pages/Admin"));

// --- GA4 TAKİP KODU ---
const TRACKING_ID = "G-KLKWN88Q9G";

// --- YÜKLENİYOR EKRANI (Loading Spinner) ---
// Sayfa internet hızına bağlı olarak yüklenirken görünecek basit tasarım
const LoadingSpinner = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "60vh",
      width: "100%",
      color: "#1a3c6d", // Sitenin lacivert rengi
      fontSize: "1.2rem",
      fontWeight: "600",
      flexDirection: "column",
      gap: "15px",
    }}
  >
    <div
      className="spinner"
      style={{
        width: "40px",
        height: "40px",
        border: "4px solid #f3f3f3",
        borderTop: "4px solid #1a3c6d",
        borderRadius: "50%",
        animation: "spin 1s linear infinite",
      }}
    ></div>
    <span>Yükleniyor...</span>
    {/* Dönme animasyonu için style etiketi */}
    <style>{`
      @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
    `}</style>
  </div>
);

// --- PAGE META (Aynı kalıyor) ---
const PageMeta = () => {
  const location = useLocation();

  useEffect(() => {
    // Sayfa değişince Analytics'e bildir
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname + location.search,
    });

    // Supabase veritabanına ziyaret istatistiğini yaz (Admin Paneli Raporu İçin)
    // admin panelinde loglanmasın
    if (!location.pathname.startsWith('/admin')) {
      const logPageView = async () => {
        const { error } = await supabase.rpc('increment_page_view', { page_path: location.pathname });
        if (error) console.error("Analytics Error:", error);
      };
      logPageView();
    }

    // Sayfayı en üste kaydır
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

function App() {
  // Uygulama ilk açıldığında Analytics'i başlat
  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
  }, []);

  return (
    <Router>
      <PageMeta />
      <div className="App">
        <Header />
        <main>
          {/* SUSPENSE: Sayfa dosyası internetten inene kadar LoadingSpinner gösterir */}
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/hakkinda" element={<AboutPage />} />
              <Route path="/tedaviler" element={<ServicesPage />} />

              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:id" element={<BlogPostDetail />} />

              <Route path="/basin" element={<PressPage />} />
              <Route path="/yorumlar" element={<ReviewsPage />} />
              <Route path="/iletisim" element={<ContactPage />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </main>
        <FloatingScrollButton />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
