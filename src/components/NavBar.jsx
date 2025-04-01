import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div><Link to="/" className="logo">DRYVER</Link></div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <Link to="/ride-booking">Book Ride</Link>
        </li>
        <li>
          <Link to="/details">Ride Details</Link>
        </li>
        <li>
          <Link to="/history">Ride History</Link>
        </li>
        <li>
          <Link to="/pricing">Pricing</Link>
        </li>
        <li>
          <Link to="/auth">Log In / Sign Up</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
