import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import "./Navbar.css";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const navLinks = [
  "Home",
  "About",
  "Skills",
  "Experience",
  "Education",
  "Portfolio",
  "Services",
  "Testimonials",
  "Contact",
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar-scroll" : ""}`}>
      <div className="container">

        <div className="logo">
          Sandhya<span>.</span>
        </div>

        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
          {navLinks.map((item) => (
            <li key={item}>
              <Link
                activeClass="active"
                to={item.toLowerCase()}
                spy={true}
                smooth={true}
                offset={-70}
                duration={600}
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>
      
    </nav>
  );
};

export default Navbar;