import React, { useState } from 'react';
import './component.css';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Login</h1>

        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" placeholder="Enter username" />

        <label htmlFor="password">Password</label>
        <div className="password-wrapper">
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            name="password"
            placeholder="Enter password"
          />
          <button
            type="button"
            className="toggle-password"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>

        <button type="submit" className="login-button">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
