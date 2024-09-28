/* Name: - Vaibhav Kalia 
    Student ID: - 301385537
    Date: - 2024-09-25
    subject: - Comp229-Web Application Development*/

import React from 'react';

import './Navbar.css';

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
      <Link to="/" className="navbar-logo">
      //here is the code for the logo in the navbar.
        <img src={`${process.env.PUBLIC_URL}/images/logo.jpg`} alt="Vaibhav Kalia Logo" className="logo-image" /> Vaibhav Kalia
      </Link>
        
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-links">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links">About Me</Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className="nav-links">Projects</Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-links">services</Link>
            </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
