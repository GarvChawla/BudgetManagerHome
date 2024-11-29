// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];

    const user = users.find(user => user.username === loginUsername && user.password === loginPassword);

    if (user) {
      setLoginError('');
      alert(`Welcome back, ${user.username}`);
      navigate('/dashboard', { state: { username: user.username } });
    } else {
      setLoginError('Invalid username or password.');
    }
  };

  return (
    <div className="form-box1">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>Username:</label>
        <input type="text" value={loginUsername} onChange={(e) => setLoginUsername(e.target.value)} required />

        <label>Password:</label>
        <input type="password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} required />

        {loginError && <span className="error-message">{loginError}</span>}
        <button type="submit">Login</button>
      </form>

      <p className="account-option">Don't have an account? <a href="/signup">Sign up here</a></p>
    </div>
  );
};

export default Login;
