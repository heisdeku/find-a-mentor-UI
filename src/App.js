import React from 'react';

import Header from './Components/header/header'
import Navbar from './sections/navigation-section/navbar'
import HeroSection from './sections/hero-section/hero-section'
import PricingSection from './sections/pricing-section/pricing-section';
import TestimonialSection from './sections/testimonial/testimonial'
import Backgrounds from './Components/backgrounds/backgrounds'
import Footer from './Components/footer/footer';

import './App.css';



function App() {
  return (
    <div className="App">
      <Header>
        <Navbar />
      </Header>
      <HeroSection />
      <div className="dim-white-section bg-light p-relative">
        <Backgrounds />
        <PricingSection />
        <TestimonialSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
