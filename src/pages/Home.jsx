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
        title="İstanbul Kardiyolog ve İç Hastalıkları Uzmanı"
        description="İstanbul'da 45 yıllık deneyimiyle hizmet veren Prof. Dr. Faruk Erzengin'den randevu alın. Kalp hastalıkları, hipertansiyon ve diyabetik ayak tedavisi. Mecidiyeköy ve Kadıköy."
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