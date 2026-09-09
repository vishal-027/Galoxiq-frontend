import { useState } from "react";
import "./Navbar.css";

// EDIT HERE: change nav links, logo text, or the button label.
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-inner">
        <a href="#" className="logo">
          Galoxiq
        </a>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#" className="active">
            Home
          </a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#plans">Plans</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="nav-cta">
          <a href="#contact" className="btn btn-primary">
            Get Started
          </a>
          <button
            className="menu-toggle"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
