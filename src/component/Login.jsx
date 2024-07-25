import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = (props) => {
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
   const handleClick=()=>{
    navigate('/register');
   }
    const handleLoginSubmit = (e) => {
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

        console.log('Form submitted', { email, pass });
        setSuccess('Successfully logged in!');
        setErrors({ email: '', pass: '' });
        navigate('/home');  // Navigate to home page after successful login
    };

    return (
        <div className="login_page">
            <form className="login" onSubmit={handleLoginSubmit}>
                <h2>Login</h2>
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    placeholder="Enter your Email Address"
                    onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <span className="error" style={{ color: 'red' }}>{errors.email}</span>}
                <label htmlFor="pass">Password</label>
                <input
                    type="password"
                    id="pass"
                    placeholder="Enter your Password"
                    onChange={(e) => setPass(e.target.value)}
                />
                {errors.pass && <span className="error" style={{ color: 'red' }}>{errors.pass}</span>}
                {success && <span className="success" style={{ color: 'green' }}>{success}</span>}
                <button className="button1" type="submit">Login</button>
                <button className="button2" type="button" onClick={handleClick}>Don't have an account? Register</button>

            </form>
        </div>
    );
};

export default Login;