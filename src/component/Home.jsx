import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate=new useNavigate();
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
    <button className="loginbutton" type="button" onClick={() => navigate('/login')}>
        Go to Login
      </button>
    </div>

  );
};

export default Home;