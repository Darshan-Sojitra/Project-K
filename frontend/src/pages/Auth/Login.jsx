import React, { useState } from 'react';
import './Auth.css';
import { useNavigate, Link } from 'react-router-dom';  // Import Link for navigation
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();  // Prevent form submission from reloading the page

    try {
      const res = await axios.post("http://localhost:3000/users/login", {
        username: username,
        password: password
      });

      if (res.status === 200) {  // Check if login was successful
        const { token } = res.data;

        // Save token in localStorage for future requests
        localStorage.setItem('token', token);

        // Redirect to the Home page after successful login
        navigate('/');
      }
    } catch (err) {
      if (err.response && err.response.status === 401) {
        // Handle invalid credentials (401 Unauthorized)
        setError('Invalid credentials. Please check your username or password.');
      } else {
        // Handle other errors
        setError('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div>
      <section className='auth-section'>
        <div className='auth-container-2'>
          <form onSubmit={handleLogin}>
            <label htmlFor="username">
              <h4>Username</h4>
              <input
                type="text"
                placeholder='Username'
                name='name'
                id='name'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>

            <label htmlFor="password">
              <h4>Password</h4>
              <input
                type="password"
                placeholder='Password'
                name='password'
                id='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>

            <button type="submit" className='auth-btn'>
              Log In
            </button>

            {error && <p style={{ color: 'red' }}>{error}</p>}  {/* Display error message */}
          </form>

          <div className="signup-option">
            <p>Don't have an account? <Link to="/Signup">Sign Up</Link></p>  {/* Add sign up option */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
