// Signup.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];

    const existingUser = users.find(user => user.username === username);

    if (existingUser) {
      setUsernameError("Username already exists! Please choose another.");
    } else {
      users.push({ username, password });
      localStorage.setItem('users', JSON.stringify(users));
      alert("Signup successful! You can now log in.");
      navigate('/');
    }
  };

  return (
    <div className="form-box1">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />

        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

        {usernameError && <span className="error-message">{usernameError}</span>}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
