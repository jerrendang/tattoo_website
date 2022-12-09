import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div id="wrapper">
      <Navbar />
      <Home />
      <Portfolio />
    </div>
  );
}

export default App;
