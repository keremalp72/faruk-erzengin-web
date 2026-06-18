import React from 'react';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About'; 
import Services from '../components/Services/Services';
import Reviews from '../components/Reviews/Reviews';

// 1. SEO Bileşenini Çağırıyoruz (En Önemli Adım)
import SEO from '../components/SEO';
import FeaturedMedia from '../components/FeaturedMedia/FeaturedMedia';

const Home = () => {
  return (
    <>
      {/* 2. Google İçin Kimlik Kartımızı Oluşturuyoruz */}
      <SEO 
        title="Kardiyolog İstanbul" 
        description="Prof. Dr. Faruk Erzengin - Kardiyoloji ve iç hastalıkları uzmanı. Kalp, hipertansiyon, diyabetik ayak tedavisi. Randevu alın."
        keywords="kardiyolog istanbul, kalp doktoru, iç hastalıkları uzmanı, hipertansiyon tedavisi, diyabetik ayak, Prof. Dr. Faruk Erzengin, nobel adayı doktor"
        url="https://farukerzengin.com/"
      />

      <Hero />
      <FeaturedMedia />
      <About /> 
      <Services />
      <Reviews />
    </>
  );
};

export default Home;