import React, { useState } from "react";
import "../Assert/Register.css"; // Ensure the correct path to your CSS file

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [errors, setErrors] = useState({ name: '', email: '', pass: '' });

    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    const validatePassword = (password) => {
        return password.length >= 6;
    };

    const validateName = (name) => {
        return name.trim().length > 0;
    };

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        let nameError = '';
        let emailError = '';
        let passError = '';

        if (!validateName(name)) {
            nameError = 'Name is required';
        }

        if (!validateEmail(email)) {
            emailError = 'Please enter a valid email address';
        }

        if (!validatePassword(pass)) {
            passError = 'Password must be at least 6 characters';
        }

        if (nameError || emailError || passError) {
            setErrors({ name: nameError, email: emailError, pass: passError });
            return;
        }

        // If no errors, proceed with form submission
        console.log('Form submitted', { name, email, pass });
        
        // Reload the page
        window.location.reload();
    };

    return (
        <div className="one">
            <form className="register" onSubmit={handleRegisterSubmit}>
                <h2>Register</h2>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                />
                {errors.name && <span className="error">{errors.name}</span>}
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    placeholder="Enter your Email Address"
                    onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <span className="error">{errors.email}</span>}
                <label htmlFor="pass">Password</label>
                <input
                    type="password"
                    id="pass"
                    placeholder="Enter your Password"
                    onChange={(e) => setPass(e.target.value)}
                />
                {errors.pass && <span className="error">{errors.pass}</span>}
                <button type="submit" className="button1">Register</button>
                <button type="button" className="button2" onClick={() => props.onFormSwitch('Login')}>Already have an account? Login</button>
            </form>
        </div>
    );
};
