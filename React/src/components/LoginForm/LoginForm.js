import React from 'react';
import './LoginForm.css';

export const LoginForm = () => {
    return (
        <div className="login-form-wrapper">
            <form className="login-form">
                <h2 className="login-h2">Welcome</h2>
                <label htmlFor="username"></label>
                <input id="username" type="text" placeholder="username" required />

                <label htmlFor="password"></label>
                <input id="password" type="text" placeholder="password" required />
                <button className="login-btn" type="submit">Login</button>
            </form>
        </div>
    )
}
