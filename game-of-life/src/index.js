import React from 'react';
import ReactDOM from 'react-dom';
// Router Imports
import { BrowserRouter as Router } from 'react-router-dom';

// Redux Imports
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// Internal Imports
import reducer from './reducers';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// store definition

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
