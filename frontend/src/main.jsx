import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, Routes, RouterProvider, Navigate, BrowserRouter } from 'react-router-dom';

import { FontSizeProvider } from './assets/Comp/Ribbon/FontSizeContext';
import './index.css';
import App from './App'



createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <FontSizeProvider>
      <App/>
    </FontSizeProvider>
  </BrowserRouter>
);
