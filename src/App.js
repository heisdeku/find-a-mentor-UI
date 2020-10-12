import React from 'react';
import Header from './Components/header/header'
import Navbar from './sections/navigation-section/navbar'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header>
        <Navbar />
      </Header>
    </div>
  );
}

export default App;
