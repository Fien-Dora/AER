import React from "react";
import {BrowserRouter, Routes, Route, RouterProvider, createBrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { routes } from "./routes";
 

function App() {
  return (
    <>
      <RouterProvider router={routes}/>
    </>
  );
}

export default App;
