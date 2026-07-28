import { Link } from "react-router-dom";
import logo from "../images/logo.png";
function Navbar() {
  return (
    <nav style={navStyle}> <Link to="/" style={{ textDecoration: "none", }} >
      <img
  src={logo}
  alt="Dancha BunAgi Export"
  style={logoStyle}
/> </Link>
      <div style={linksStyle}>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/coffee" className="nav-link">Coffee</Link>
        <Link to="/services" className="nav-link">Services</Link>
        <Link to="/contact" className="nav-link">Contact</Link>

        <Link to="/contact">
          <button style={quoteButton}>Request Quote</button>
        </Link>
      </div>
    </nav>
  );
}



const navStyle = {
  background: "#4b2e1e",
  padding: "10px 60px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  position: "sticky",
  top: 0,
  zIndex: 1000,
  boxShadow: "0 2px 12px rgba(0,0,0,0.25)",
};

const logoStyle = {
  height: "90px",
  width: "auto",
  display: "block",
   
};

const linksStyle = {
  display: "flex",
  alignItems: "center",
  gap: "24px",
};

const quoteButton = {
  background: "#d4a017",
  color: "white",
  border: "none",
  padding: "12px 22px",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: "bold",
  fontSize: "15px",
};


export default Navbar;