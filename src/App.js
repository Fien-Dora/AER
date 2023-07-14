import React from "react";
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Home from "./pages/Home";
import Category from ".//pages/Category.js";
import Maintain from "./pages/Maintain";
 

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Login />}> </Route>
            <Route path="Home" element={<Home />} />
            <Route path="Category" element={<Category />} />
            <Route path="Maintain" element={<Maintain />} />

        </Routes>
        
      </BrowserRouter>
    
    </>
  );
}

export default App;
