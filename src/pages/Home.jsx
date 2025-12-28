import React from 'react';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About'; 
import Services from '../components/Services/Services';
import Reviews from '../components/Reviews/Reviews';

// 1. SEO Bileşenini Çağırıyoruz (En Önemli Adım)
import SEO from '../components/SEO';

const Home = () => {
  return (
    <>
      {/* 2. Google İçin Kimlik Kartımızı Oluşturuyoruz */}
      <SEO 
        title="Prof. Dr. Faruk Erzengin | Kardiyoloji ve İç Hastalıkları Uzmanı" 
        description="İstanbul Üniversitesi Tıp Fakültesi önceki dekanı, Nobel adayı Prof. Dr. Faruk Erzengin. Kalp hastalıkları, hipertansiyon, diyabetik ayak ve iç hastalıkları tedavisi." 
      />

      <Hero />
      {/* Ana Sayfa Hakkımda Özeti (Components klasöründeki) */}
      <About /> 
      <Services />
      <Reviews />
    </>
  );
};

export default Home;