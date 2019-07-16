import React, { Fragment } from 'react';

// Components
import Rules from './components/rules';
import Interactive from './views/interactive';
import About from './components/about';

import './App.css';

function App() {
  return (
    <Fragment>
      <h1>Conway's Game of Life</h1>
      <div className="grid-container">
        <Interactive/>
      </div>
      <div className='rules-container'>
        <Rules/>
      </div>
      
      <About/>
    </Fragment>
  );
}

export default App;
