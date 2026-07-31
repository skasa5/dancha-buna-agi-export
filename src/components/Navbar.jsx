import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../images/logo.png";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);


const handleNavigation = () => {
  setMenuOpen(false);
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "auto",
  });
};


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
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

        <NavLink to="/" end className="nav-link" onClick={handleNavigation}>
          Home
        </NavLink>

        <NavLink
  to="/about"
  className="nav-link"
  onClick={() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }}
>
  About
</NavLink>

        <NavLink to="/coffee" className="nav-link" onClick={handleNavigation}>
          Coffee
        </NavLink>

        <NavLink to="/services" className="nav-link" onClick={handleNavigation}>
          Services
        </NavLink>

        <NavLink to="/contact" className="nav-link" onClick={handleNavigation}>
          Contact
        </NavLink>

        <Link to="/contact" onClick={handleNavigation}>
          <button className="quote-btn">
            Request Quote
          </button>
        </Link>

      </div>
    </nav>
  );
}

export default Navbar;