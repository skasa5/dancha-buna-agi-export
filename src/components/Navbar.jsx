import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <Link to="/" className="logo-link">
        <img
          src={logo}
          alt="Dancha Buna Agi Export"
          className="logo"
        />
      </Link>

      <button
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/coffee" className="nav-link" onClick={() => setMenuOpen(false)}>Coffee</Link>
        <Link to="/services" className="nav-link" onClick={() => setMenuOpen(false)}>Services</Link>
        <Link to="/contact" className="nav-link" onClick={() => setMenuOpen(false)}>Contact</Link>

        <Link to="/contact" onClick={() => setMenuOpen(false)}>
          <button className="quote-btn">
            Request Quote
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;