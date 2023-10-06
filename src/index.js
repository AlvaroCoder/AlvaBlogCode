import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import PostController from './controllers/postController';
import Layout from './views/Layout'
import PostDetails from './views/PostDetails';
const root = ReactDOM.createRoot(document.getElementById('root'));
const routesBrowser = createBrowserRouter([
  {
    path: "/",
    Component : Layout,
    children : [
      {
        index : true,
        Component : PostController
      },
      {
        path : "post/:id",
        Component : PostDetails
      }
    ]
  },
])

root.render(
  <React.StrictMode>
    <RouterProvider router={routesBrowser} fallbackElement={<p>Loading ...</p>} />
  </React.StrictMode>
);

