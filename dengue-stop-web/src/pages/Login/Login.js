import React from "react";
import "./Login.css";

import { Container, Row, Col, Form, Button } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      emailError: "",
      passwordError: "",
      loading: false
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <Container>
          <Row className="mt-4">
            <Col md={3}></Col>
            <Col xs={12} md={6} className="border border-muted p-5">
              <center>
                <img
                  src="https://miro.medium.com/max/335/1*IAuIqvNUZGnKu1VK8vTrjw.jpeg"
                  className="w-25 mt-5"
                  alt=""
                />

                <h5 className="mt-3 text-dark">
                  Dengue Stop ! ( Admin Panel )
                </h5>
                <p className="text-secondary small">
                  Sign in with your email ID or phone number
                </p>
              </center>

              {/* Form */}
              <div className="mt-5 m-2 loginForm">
                <Form.Text className="text-danger">
                  {this.state.emailError}
                </Form.Text>
                <Form.Control
                  type="text"
                  onChange={this.handleChange}
                  name="email"
                  placeholder="Your Email or Phone"
                  className="mb-3 input"
                ></Form.Control>

                <Form.Text className="text-danger">
                  {this.state.passwordError}
                </Form.Text>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Your Password"
                  className="mb-3 input"
                  onChange={this.handleChange}
                ></Form.Control>

                <Button
                  className={`loginButton btn-block ${
                    this.state.loading ? "disabled" : ""
                  }`}
                  onClick={this.login}
                >
                  {this.state.loading ? "Loading" : "Login in to admin portal"}

                  <FontAwesomeIcon icon={faChevronRight} className="ml-2" />
                </Button>
              </div>

              {/*  options */}
              <div className="mt-3">
                <Row>
                  <Col>
                    <button className="btn btn-link">
                      <p className="small">Forgot Password ?</p>
                    </button>
                  </Col>
                  <Col className="d-flex justify-content-end align-items-center">
                    <p className="small">
                      Dont have an account !{" "}
                      <a
                        href="/supplierRegister"
                        className="small text-primary"
                      >
                        Get Started
                      </a>
                    </p>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col md={3}></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
