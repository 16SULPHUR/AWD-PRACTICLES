import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(username)) {
      setError('Please enter a valid email address as the username.');
      return;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      setError('Please enter a password with at least 8 characters, including at least one uppercase letter, one lowercase letter, one number, and one special character.');
      return;
    }
      const name = username.split('@')[0];
      setIsLoggedIn(true);
      setError('');
      setUsername(name);
  };
  return (
    <div className="container">
      {isLoggedIn ? (
        <div className="welcome">Welcome, {username}!</div>
      ) : (
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
      <h2>202203103510124 <br/>ANKIT PATIL</h2>
            <label htmlFor="username">Username:</label>
            <input type="text"  id="username"  value={username} onChange={handleUsernameChange}  className="input-field"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password"  value={password}
              onChange={handlePasswordChange}  className="input-field"
            />
          </div>
          {error && <div className="error">{error}</div>}
          <button type="submit" className="submit-btn">Login</button>
        </form>
      )}
    </div>
  );
} 