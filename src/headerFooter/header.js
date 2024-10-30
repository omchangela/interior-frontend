import { Link } from "react-router-dom";
import { useState } from "react";
import "./header.css";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header">
      <div className="header-logo-text">
        <Link style={{ display: "flex" }} to="/">
          <div className="header-logo">
            {/* Add your logo image here */}
          </div>
          <div className="header-text">
            <p>Logo</p>
          </div>
        </Link>
      </div>
      
      {/* Toggle Button for Small Screens */}
      <button className="nav-toggle" onClick={toggleMenu}>
        ☰
      </button>

      {/* Navigation Links */}
      <div className="header-pages">
        <ul className={menuOpen ? "show" : ""}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/aboutus">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          {/* Inquiry Button inside dropdown */}
          <li>
            <a href="tel:+91 9723554357" className="nav-contactbtn">
            <span>9723554357</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
