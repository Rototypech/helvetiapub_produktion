import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Force cache bust
console.log('App version 2.0.0 loaded at:', new Date().toISOString());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);