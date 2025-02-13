import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-link">
          Add Person
        </Link>
        <Link to="/view" className="nav-link">
          View Persons
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
