import { Link } from "react-router-dom";
import logo from "../images/logo.png";

function Navbar() {
  return (
    <nav style={navStyle}>
      <Link to="/" style={{ textDecoration: "none" }}>
        <img
          src={logo}
          alt="Dancha BunAgi Export"
          style={logoStyle}
        />
      </Link>

      <div style={linksStyle}>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/coffee" className="nav-link">Coffee</Link>
        <Link to="/services" className="nav-link">Services</Link>
        <Link to="/contact" className="nav-link">Contact</Link>

        <Link to="/contact">
          <button style={quoteButton}>
            Request Quote
          </button>
        </Link>
      </div>
    </nav>
  );
}

const navStyle = {
  background: "#3A2417",
  padding: "14px 70px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  position: "sticky",
  top: 0,
  zIndex: 1000,
  boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
  transition: "all 0.3s ease",
};

const logoStyle = {
  height: "95px",
  width: "auto",
  display: "block",
};

const linksStyle = {
  display: "flex",
  alignItems: "center",
  gap: "34px",
};

const quoteButton = {
  background: "linear-gradient(135deg, #C89B3C, #B8860B)",
  color: "#fff",
  border: "none",
  padding: "13px 26px",
  borderRadius: "10px",
  cursor: "pointer",
  fontWeight: 600,
  fontSize: "15px",
  letterSpacing: "0.4px",
  transition: "all .3s ease",
  boxShadow: "0 8px 20px rgba(200,155,60,.25)",
};

export default Navbar;