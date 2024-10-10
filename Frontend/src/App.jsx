import React from 'react';
import NavBar from './Components/navBar'; // Capitalized NavBar
import Home from './Components/Hero';
import './App.css';
import Events from './Components/ Events';

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Events />
    </>
  );
}

export default App; // Don't forget to export the App component
