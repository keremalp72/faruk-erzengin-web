import React from 'react';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About'; 
import Services from '../components/Services/Services';
import Reviews from '../components/Reviews/Reviews';

const Home = () => {
  return (
    <>
      <Hero />
      <About /> {/* Ana sayfadaki bu kısım "Özet" olarak kalabilir */}
      <Services />
      <Reviews />
    </>
  );
};

export default Home;