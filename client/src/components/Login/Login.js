import React, { Component } from "react";

export default class Login extends Component {
    render() {
        return (
            <div>
            <form>
                <h3>Login In</h3>

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
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Login</button>
                {/* <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p> */}

                <p className="signuptext-login" >Don't have a account , Register here</p>
            </form>
            
            </div>
        );
    }
}