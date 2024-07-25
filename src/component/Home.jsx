import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../Assert/Home.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from "../Assert/Red blue illustration Kids Toys logo (2).png";

const Home = () => {
    const navigate = useNavigate(); // Correct usage of useNavigate

    return (
        <div className="fullpage"> 
            <div className="navbar"> 
             
                <div className='logo'>
                <img src={logo} alt="Toy Store Logo" /> 
                </div>


                <div className="heading">
                    <span className="color1">T</span>
                    <span className="color2">h</span>
                    <span className="color3">e</span>
                    <span className="color4"> </span>
                    <span className="color5">T</span>
                    <span className="color6">o</span>
                    <span className="color7">y</span>
                    <span className="color8"> </span>
                    <span className="color9">S</span>
                    <span className="color10">t</span>
                    <span className="color11">o</span>
                    <span className="color12">r</span>
                    <span className="color13">e</span>
                    
                </div>


                <div className="search">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>

                <div className="loginbutton">
                    <i className="fa-solid fa-user" onClick={() => navigate('/login')}></i>
                </div>

                <div className="cart">
                    <i className="fa-solid fa-cart-shopping"></i>
                </div>
            </div>

            <div className='shops'>

              <h2>Home</h2>
              <h2>About</h2>
              <h2>Shop by Offer</h2>
              <h2>Shop by Age</h2>
              <h2>Shop by catagory</h2>
              <h2>Shop by brand</h2>

            </div>
        </div>
    );
};

export default Home;
