import { useState, useEffect } from "react";
import "../App.css";
import { Link } from "react-router";

export default function Navbar({ dark, setDark }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }

    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dark]);

  const handleScrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <header
      className={`navbar ${dark ? "dark" : "light"} ${
        scrolled ? "scrolled" : "top"
      }`}
    >
      <h1 className="logo" style={{ cursor: "pointer" }}>
        Brighto<span className="dot">.</span>
      </h1>

      <nav
        id="div-b"
        className={`nav-links ${menuOpen ? "active" : ""}`}
        style={{ cursor: "pointer" }}
      >
        <Link to={'/'}>Home</Link>
        <Link to={"/aboutme"}>AboutMe</Link>
        <Link to={"/myservice" }>Myservice</Link>
        <Link to={"/project"}>Project</Link>
      </nav>

      <div className="nav-actions">
        <button onClick={() => setDark(!dark)} className="toggle-btn">
          {dark ? "☀️" : "🌙"}
        </button>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <Link to={"/contactme"}>
        <a
          className="contact-btn"
          
          style={{ cursor: "pointer" }}
        >
          Contact
        </a></Link>
      </div>
    </header>
  );
}
