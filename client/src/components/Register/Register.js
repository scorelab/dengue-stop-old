import React, { Component } from "react";
import {DropdownButton , Dropdown,Form} from 'react-bootstrap';


export default class SignUp extends Component {
    render() {
        return (
            
            <form>
                <h3>Register</h3>

                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control input-fields" placeholder="username" />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control input-fields" placeholder="email" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control input-fields" placeholder="password" />
                </div>


                <div className="form-group">
                    <label>Re-enter Password</label>
                    <input type="password" className="form-control input-fields" placeholder="password" />
                </div>

                <div className="form-group">
                    <label>Gender</label>
                    <DropdownButton id="dropdown-item-button" title="Male">
  <Dropdown.Item as="button">Male</Dropdown.Item>
  <Dropdown.Item as="button">Female</Dropdown.Item>
  <Dropdown.Item as="button">Other</Dropdown.Item>
</DropdownButton>
                </div>
               
                <div className="form-group">
                  
                    <Form.Check 
    type="switch"
    id="custom-switch"
    label="I agree to the terms and conditions"
  />
                </div>

          
                <button type="submit" className="btn btn-primary btn-block">Registser</button>
                <p className="signuptext-login" >Already have a account, Login here</p>
            </form>
          
        );
    }
}