import React from 'react';

import Header from './Components/header/header'
import Navbar from './sections/navigation-section/navbar'
import HeroSection from './sections/hero-section/hero-section'

import './App.css';

function App() {
  return (
    <div className="App">
      <Header>
        <Navbar />
      </Header>
      <HeroSection />
    </div>
  );
}

export default App;
