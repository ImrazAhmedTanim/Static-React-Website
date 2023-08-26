import React from 'react';
import ReactDOM from 'react-dom'; // Change this line

import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'; // Wrap BrowserRouter in curly braces

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>
);

reportWebVitals();