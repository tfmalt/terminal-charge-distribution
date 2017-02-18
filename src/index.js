import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './App';
import rates from './reducers';
import './index.css';

const store = createStore(rates);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
