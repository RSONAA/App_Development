// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from "react-router-dom";
import './App.css';
import { Login } from './component/Login';
import { Register } from './component/Register';
import Home from './component/Home';
import About from './component/About';
import Contact from "./component/Contact";
import Navbar from "./component/Navbar";
import Shopbyage from "./component/Shopbyage";
import Shopbybrand from "./component/Shopbybrand";
import Shopbychar from "./component/Shopbychar";
import Checkout from "./component/Checkout";
import { CartProvider } from "./component/CartContext";
import Wishlist from "./component/Wishlist";


import Buy from "./component/Buy"; // Ensure the path is correct

const App = () => {
  const [currentForm, setCurrentForm] = useState('Login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  const location = useLocation();
  const hideNavbarPaths = ["/login", "/register"];

  return (
    <div className="App">
      {!hideNavbarPaths.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/login" element={<Login onFormSwitch={toggleForm} />} />
        <Route path="/register" element={<Register onFormSwitch={toggleForm} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shopbyage" element={<Shopbyage />} />
        <Route path="/shopbybrand" element={<Shopbybrand />} />
        <Route path="/shopbychar" element={<Shopbychar />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/wishlist" element={<Wishlist />} />
        
        
        <Route path="/buy" element={<Buy />} /> {/* Ensure Buy component is correctly imported and used */}
      </Routes>
    </div>
  );
}

const AppWrapper = () => (
  <Router>
    <CartProvider>
      <App />
    </CartProvider>
  </Router>
);

export default AppWrapper;

