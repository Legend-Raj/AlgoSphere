import React, { Component } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./style.css";
import logo1 from "./logo.png";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid d-flex align-items-center justify-content-between">
          {/* Logo and Home Button */}
          <div className="d-flex align-items-center">
            <a className="navbar-brand" href="#">
              <img src={logo1} alt="Logo" width="100" height="40" />
            </a>
            <a href="#" className="btn btn-outline-primary btn-lg ml-3">
              Home
            </a>
          </div>

          {/* Centered Brand Title */}
          <div className="text-center mx-auto">
            <span
              className="navbar-title font-weight-bold"
              style={{ fontSize: "2.7rem", fontWeight: 800 }}
            >
              AlgoSphere
            </span>
          </div>

          {/* Social Media Icons */}
          <div className="d-flex ml-auto align-items-center">
            <a
              href="https://github.com/Legend-Raj"
              className="social-link mr-3"
            >
              <FaGithub size={25} />
            </a>
            <a
              href="https://www.linkedin.com/in/piyush-raj-2a5b58259/"
              className="social-link"
            >
              <FaLinkedin size={25} />
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
