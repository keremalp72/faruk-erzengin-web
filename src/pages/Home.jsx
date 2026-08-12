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
        title="Prof. Dr. Faruk Erzengin | İstanbul Kardiyolog ve İç Hastalıkları Uzmanı"
        description="Prof. Dr. Faruk Erzengin - İstanbul'un önde gelen kardiyoloji ve iç hastalıkları uzmanı. Kalp hastalıkları, hipertansiyon, diyabetik ayak tedavisi. Mecidiyeköy ve Kadıköy muayenehane. Nobel Tıp Ödülü adayı. Hemen randevu alın."
        keywords="kardiyolog istanbul, kalp doktoru istanbul, iç hastalıkları uzmanı, hipertansiyon tedavisi, diyabetik ayak, Prof. Dr. Faruk Erzengin, mecidiyeköy kardiyolog, kadıköy kalp doktoru, nobel adayı doktor, erzengin solüsyonu"
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