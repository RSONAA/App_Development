import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import "../css/Login.css";

export const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [errors, setErrors] = useState({ email: '', pass: '' });
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    const validatePassword = (password) => {
        return password.length >= 6;
    };

    const handleClick = () => {
        navigate('/register');
    }

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        let emailError = '';
        let passError = '';

        if (!validateEmail(email)) {
            emailError = 'Please enter a valid email address';
        }

        if (!validatePassword(pass)) {
            passError = 'Password must be at least 6 characters';
        }

        if (emailError || passError) {
            setErrors({ email: emailError, pass: passError });
            setSuccess('');
            return;
        }

        try {
            // Log the API request
            console.log('Sending request to API');

            // Fetch the users
            const result = await axios.get('http://localhost:3001/users');
            
            // Log the response data
            console.log('API response:', result.data);

            // Find the user that matches the email and password
            const user = result.data.find(user => user.email === email && user.pass === pass);

            if (user) {
                setSuccess('Successfully logged in!');
                setErrors({ email: '', pass: '' });
                navigate('/home');  // Navigate to home page after successful login
            } else {
                setSuccess('');
                setErrors({ email: '', pass: 'Invalid email or password' });
                navigate('/');  // Navigate to home page or another page on login failure
            }
        } catch (error) {
            // Log the error
            console.error('Login error:', error);
            setErrors({ email: '', pass: 'An error occurred during login' });
            setSuccess('');
        }
    };

    return (
        <div className="login_page">
            <form className="login" onSubmit={handleLoginSubmit}>
                <h2>Login</h2>
                <label htmlFor="email">Email</label>
                <div className="input-container">
                    <i className="fas fa-envelope"></i>
                    <input
                        id="email"
                        placeholder="Enter your Email Address"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                {errors.email && <span className="error">{errors.email}</span>}
                <label htmlFor="pass">Password</label>
                <div className="input-container">
                    <i className="fas fa-lock"></i>
                    <input
                        type="password"
                        id="pass"
                        placeholder="Enter your Password"
                        onChange={(e) => setPass(e.target.value)}
                    />
                </div>
                {errors.pass && <span className="error">{errors.pass}</span>}
                {success && <span className="success">{success}</span>}
                <button className="button1" type="submit">Login</button>
                <button className="button2" type="button" onClick={handleClick}>Don't have an account? Register</button>
            </form>
        </div>
    );
};

export default Login;
