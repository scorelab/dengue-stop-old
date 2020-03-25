import React, { Component } from 'react';
import './auth.css';
import Navbar from './Navbar';
import { Toast } from '../../utils/Toast';

export default class Register extends Component {

  state = {
    name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  validate = () => {
    return (this.state.email.length > 0 &&
      this.state.password.length > 0 &&
      this.state.name.length > 0 &&
      this.state.username.length > 0 &&
      this.state.confirmPassword.length > 0
    );
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  validatePassword(){
    const password = document.querySelector('#password');
    const confirmPassword = document.querySelector('#confirmPassword');
    console.log('WEIRD')
    if(password.value !== confirmPassword.value) {
      confirmPassword.setCustomValidity("Passwords Don't Match!");
      console.log('HERE WE ARE')
      return false;
    }
    confirmPassword.setCustomValidity('');
    return true;
  }

  validateEmail() {
    const { email } = this.state;
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  handleSubmit = () => {
    console.log(this.validate(), this.validatePassword(), 'LETS_DEBUG')
    if (!this.validateEmail() || !this.validate() || !this.validatePassword()) Toast('Please fill up all the details properly!');
    else (async () => {
      try {
        await fetch(`${process.env.REACT_APP_SERVER_IP}/auth/register`, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.state)
        });
        this.props.history.push({
          pathname: '/login',
          search: '',
          state: { email: this.state.email, password: this.state.password }
        })
      } catch (e) {
        console.error(e.message);
      }
    })() 
  }

  render () {
    return (
      <div>
        <Navbar highlight='register' />
          <div className="container main" autoComplete='off'>
            <div className="input-field">
              <input required id="name" type="text" name='name' value={this.name} onChange={this.handleChange}className="validate"></input>
              <label className='active' htmlFor="name">Name</label>
            </div>
            <div className="input-field">
              <input required id="username" type="text" name='username' value={this.username} onChange={this.handleChange} className="validate"></input>
              <label className='active' htmlFor="username">Username</label>
            </div>
            <div className="input-field">
              <input required id="email" type="email" name='email' value={this.email} onChange={this.handleChange} className="validate"></input>
              <label className='active' htmlFor="email">Email</label>
            </div>
            <div className="input-field">
              <input required id="password" type="password" name='password' value={this.password} onChange={this.handleChange} pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$" className="validate"></input>
              <label className='active' htmlFor="password">Password</label>
            </div>
            <div className="input-field">
              <input required id="confirmPassword" type="password" name='confirmPassword' value={this.confirmPassword} onChange={this.handleChange} pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$" className="validate"></input>
              <label className='active' htmlFor="confirm_password">Confirm Password</label>
            </div>
            <div className='button-group'>
              <button type='submit' onClick={this.handleSubmit} className='btn waves-effect waves-light blue darken-1'>Register</button>
              <button className='btn waves-effect waves-light blue lighten-2'>Admin</button>
            </div>
          </div>
      </div>
    );
  }
}

