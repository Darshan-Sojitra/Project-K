import React, { useState } from 'react';
import './Auth.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();  

    try {
      const res = await axios.post("http://localhost:3000/users/signup", {
        username: username,
        password: password
      });
      const data = res.data;
      console.log(data)
      // Redirect to the Home page after successful signup
      navigate('/Login');
    } catch (err) {
      console.log(err);
      setError('Signup failed. Please check the entered information.');
    }
  };

  return (
    <div>
      <section className='auth-section'>
        <div className='auth-container-2'>
          <form onSubmit={handleSignup}>
            <label htmlFor="username">
              <h4>Username</h4>
              <input
                type="text"
                placeholder='Username'
                name='username'
                id='username'
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
              Sign Up
            </button>

            {error && <p style={{ color: 'red' }}>{error}</p>}  {/* Display error message */}
          </form>
        </div>
      </section>
    </div>
  );
}; 

export default Signup;
