import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// 1. Import et
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 2. Provider ile sar */}
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);