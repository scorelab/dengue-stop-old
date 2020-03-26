import React from "react";

import { Navbar, Form } from "react-bootstrap";

import "./Header.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

class Header extends React.Component {
  render() {
    return (
      <div>
        <Navbar expand="lg" collapseOnSelect className="navbar">
          <Navbar.Brand href="#home">
            <h5 className="brandLogo ml-5">DENGUE STOP !</h5>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          {/* Right Side content */}
          <Navbar.Collapse
            className="justify-content-end"
            id="responsive-navbar-nav"
          >
            <Form.Control
              type="search"
              className="searchBar w-25"
              placeholder="Search"
            ></Form.Control>
            <h5 className="supplierName">{"Hello Admin"}</h5>
            <FontAwesomeIcon
              icon={faSignOutAlt}
              className="headerIcon"
              //   onClick={this.logout}
            />
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
export default Header;
