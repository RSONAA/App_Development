import React, { useState } from "react";
import "../Assert/Login.css";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [errors, setErrors] = useState({ email: '', pass: '' });
    const [loginSuccess, setLoginSuccess] = useState(false);

    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    const validatePassword = (password) => {
        return password.length >= 6;
    };

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
            return;
        }

        // If no errors, proceed with form submission
        console.log('Form submitted', { email, pass });
        setLoginSuccess(true);
    };

    return (
        <div className="one">
            <form className="login" onSubmit={handleLoginSubmit}>
                <h2>Login</h2>
                {loginSuccess && <p className="success-message">Successfully logged in!</p>}
                <label htmlFor="email">Email</label>
                <input
                  
                    id="email"
                    placeholder="Enter your Email Address"
                    onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) {
                            setErrors(prevErrors => ({ ...prevErrors, email: '' }));
                        }
                    }}
                    
                />
                {errors.email && <span className="error">{errors.email}</span>}
                <label htmlFor="pass">Password</label>
                <input
                    type="password"
                    id="pass"
                    placeholder="Enter your Password"
                    onChange={(e) => {
                        setPass(e.target.value);
                        if (e.target.value.length >= 6 && errors.pass) {
                            setErrors(prevErrors => ({ ...prevErrors, pass: '' }));
                        }
                    }}
                    
                />
                {errors.pass && <span className="error">{errors.pass}</span>}
                <button className="button1" type="submit">Login</button>
                <button className="button2" type="button" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register</button>
            </form>
        </div>
    );
};
