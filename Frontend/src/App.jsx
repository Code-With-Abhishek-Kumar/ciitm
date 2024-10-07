import { useState } from 'react';
import axios from 'axios';
import NavBar from './Components/navBar'; // Capitalized NavBar
import Home from './Components/Hero';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <Home />
    </>
  );
}

export default App; // Don't forget to export the App component
