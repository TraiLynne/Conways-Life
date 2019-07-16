import React, { Fragment } from 'react';

// Components
import Rules from './components/rules'

import './App.css';

function App() {
  return (
    <Fragment>
      <h1>Conway's Game of Life</h1>
      <Rules/>
    </Fragment>
  );
}

export default App;
