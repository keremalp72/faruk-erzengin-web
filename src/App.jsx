import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero'; 
import About from './components/About/About';
import Services from './components/Services/Services';
import Reviews from './components/Reviews/Reviews';
import Footer from './components/Footer/Footer';
import './App.css'; 

function App() {
  return (
    <div className="App">
    <Header />
    <main>
      <Hero />
      <About /> 
      <Services/>
      <Reviews/>
      <Footer/>
    </main>
  </div>
  );
}

export default App;