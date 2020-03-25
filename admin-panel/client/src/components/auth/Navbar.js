import React from 'react';
import { Link } from'react-router-dom';
import logo from '../../assets/logo.png'
import './auth.css';

const Navbar = ({ highlight }) => {
  return (
    <div className='nav'>
      <ul>
        <Link to='/register'>
          <li className={ highlight === 'register' ? 'highlight': 'default' }>Register</li>
        </Link>
        <Link to='/login'>
          <li className={ highlight === 'login' ? 'highlight': 'default' }>Login</li>
        </Link>
      </ul>
      <img className='responsive-img' src={logo} alt='logo'></img>  
    </div>
  );
};

export default Navbar;
