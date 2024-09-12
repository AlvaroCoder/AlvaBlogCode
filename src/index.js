import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom'
import { routerBrowser } from './routes/Index';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={routerBrowser} fallbackElement={<p>Loading ...</p>} />
  </React.StrictMode>
);

