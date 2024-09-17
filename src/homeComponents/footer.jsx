import React, { Component } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './style.css';

class Footer extends Component {
  render() {
    return (
      <footer className="page-footer">
        <div className="footer-container">
          {/* Social Media Links */}
          <div className="social-icons">
            <a href="https://github.com/Legend-Raj" className="social-link" aria-label="GitHub">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/piyush-raj-2a5b58259/" className="social-link" aria-label="LinkedIn">
              <FaLinkedin size={24} />
            </a>
          </div>

          {/* Copyright Section */}
          <div className="footer-copyright">
            <span>© {new Date().getFullYear()} Legend-Raj. All rights reserved.</span>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
