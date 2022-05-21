import { createRoot } from 'react-dom/client';
import App from './App';
import ReactDOM from 'react-dom/client';
import React from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
