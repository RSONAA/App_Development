import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import './App.css';
import { Login } from './component/Login';
import { Register } from './component/Register';
import Home from './component/Home';

function App() {
  const [currentForm, setCurrentForm] = useState('Login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
  
    <Router>
      <div className="App">
     
        <Routes>
          <Route path="/login" element={<Login onFormSwitch={toggleForm} />} />
          <Route path="/register" element={<Register onFormSwitch={toggleForm} />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Navigate replace to="/home" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;