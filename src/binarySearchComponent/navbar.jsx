import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          {/* Home Button on the Left */}
          <Link to="/" className="btn btn-primary">
            Home
          </Link>

          {/* Centered Brand Name */}
          <div className="mx-auto order-0">
            <span className="navbar-brand mx-auto">Binary Search Game</span>
          </div>

          {/* Mobile Toggle Button */}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    );
  }
}

export default Navbar;
