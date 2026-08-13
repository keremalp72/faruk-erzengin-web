import React from 'react';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About'; 
import HekimlikAndi from '../components/HekimlikAndi/HekimlikAndi';
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
        title="İstanbul Kardiyolog – Randevu ve Tedavi"
        description="Prof. Dr. Faruk Erzengin – İstanbul'da kardiyoloji ve iç hastalıkları uzmanı. Kalp, hipertansiyon, diyabetik ayak tedavisi. Mecidiyeköy ve Kadıköy'de randevu alın."
        url="https://farukerzengin.com/"
      />

      <Hero />
      <FeaturedMedia />
      <About /> 
      <HekimlikAndi />
      <Services />
      <Reviews />
    </>
  );
};

export default Home;