import React, { useState, useEffect } from 'react';
import './auth.css';
import Navbar from './Navbar';
import { Toast } from '../../utils/Toast';

const Login = (props) => {

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const { location } = props;

  useEffect(() => {
    if (location.state !== undefined) {
      const { email, password } = location.state;
      setEmail(email);
      setPassword(password);
    }
  }, [location.state]);

  const handleEmailChange = e => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  }

  const validate = () => {
    return (!email &&
      !password
    );
  }

  const handleSubmit = () => {
    if (validate()) Toast('Please fill up all the details!');
    else (async () => {
      try {
        const res = await fetch(`${process.env.REACT_APP_SERVER_IP}/auth/login`, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, password })
        });
         
        const { token, userId, isAdmin } = await res.json();
        // Setting items in localStorage for further authentication and utility
        localStorage.setItem('token', token);
        localStorage.setItem('userId', userId);
        localStorage.setItem('isAdmin', `${isAdmin}`);

        // Redirecting to appropriate route
        if (isAdmin) props.history.push('/admin');
        else props.history.push('/map');
        
      } catch (e) {
        console.error(e);
      }
    })()  
  }

  return (
    <div>
      <Navbar highlight="login"/>
      <div className="container main" autoComplete='off'>
        <div className="input-field input-outlined">
          <input required id="email" type="email" name='email' value={email} className="validate" onChange={handleEmailChange}></input>
          <label className='active' htmlFor="email">Email</label>
        </div>
        <div className="input-field input-outlined">
          <input required id="password" type="password" name='password' value={password} onChange={handlePasswordChange} pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$" className="validate"></input>
          <label className='active' htmlFor="password">Password</label>
        </div>
        <div className='button-group'>
          <button className='center btn waves-effect waves-light blue darken-1' onClick={handleSubmit}>Login</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
