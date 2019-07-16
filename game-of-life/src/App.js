import React, { Fragment } from 'react';

// Components
import Rules from './components/rules';
import Grid from './components/grid';

import './App.css';

function App() {
  return (
    <Fragment>
      <h1>Conway's Game of Life</h1>
      <Grid/>
      <Rules/>
    </Fragment>
  );
}

export default App;
