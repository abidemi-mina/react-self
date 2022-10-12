import './App.css';
import React from 'react'
import {Link} from 'react-router-dom'

function Nav() {
    const navstyle={
        color:'white'
    };

  return (
    <nav>
    <h1>React Links</h1>
    <ul className="nav-links">
        <Link style={navstyle} to="/">
        <li>Home</li>
        </Link>
        <Link style={navstyle} to="/about">
        <li>About Us</li>
        </Link>
        <Link style={navstyle} to="/shop">
        <li>Shop with Us</li>
        </Link>
        <Link style={navstyle} to="/profile">
        <li>Profile</li>
        </Link>
        
        
    </ul>
    </nav>
  );
}

export default Nav;
