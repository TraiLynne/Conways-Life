import React from 'react';
import LifeCanvas from './components/LifeCanvas';
import Rules from './components/Rules';
import './App.css';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <h1>Conway's Game of Life</h1> 
      <LifeCanvas/>
      <Rules/>
      <About/>
    </div>
  );
}

export default App;
