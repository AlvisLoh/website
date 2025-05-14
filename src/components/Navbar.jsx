import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Optional: Prevent body scroll when menu is open (mobile)
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Add the new nav item here
  const navItems = [
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" }, // Added Services
    { path: "/testimonials", label: "Testimonials" },
    { path: "/my-coaching", label: "My Coaching" },
    { path: "/book-a-session", label: "Book a session" },
  ];
  

  return (
    <nav
      style={{
        background: "#150a1f",
        padding: "1rem 5%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "relative",
        flexWrap: "wrap",
        borderBottom: "3px solid #eedd7f", // Added border bottom
      }}
    >
      {/* Logo */}
      <NavLink to="/" style={{ display: "flex", alignItems: "center" }}>
        <img
          src="logo.png"
          alt="Logo"
          style={{
            borderRadius: "50%",
            width: "60px",
            height: "60px",
            objectFit: "contain",
            display: "block",
            border: "none",
          }}
        />
      </NavLink>

      {/* Hamburger Icon (mobile only) */}
      <button
        type="button"
        onClick={() => setMenuOpen((open) => !open)}
        className="hamburger"
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={menuOpen}
        aria-controls="navbar-links"
        style={{
          background: "none",
          border: "none",
          color: "#eedd7f",
          fontSize: "2rem",
          cursor: "pointer",
          display: "block",
          marginLeft: "auto",
          zIndex: 2,
          padding: "0.5rem 0.75rem",
        }}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* Navigation links */}
      <nav
        id="navbar-links"
        style={{
          display: menuOpen ? "flex" : "none",
          flexDirection: "column",
          width: "100%",
          marginTop: "1rem",
          gap: "1rem",
          background: "#150a1f",
          position: "absolute",
          left: 0,
          top: "100%",
          padding: "1rem 5%",
          boxSizing: "border-box",
          zIndex: 9999, // <-- Set high z-index here
        }}
        className="nav-links"
        aria-label="Main navigation"
      >
        {navItems.map(({ path, label }) => (
          <NavLink
            key={path}
            to={path}
            style={({ isActive }) => ({
              color: "#eedd7f",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "1.1rem",
              borderBottom: isActive ? "2px solid #fff" : "none",
              paddingBottom: "5px",
              transition: "border-bottom 0.2s",
              padding: "0.5rem 0",
            })}
            tabIndex={menuOpen ? 0 : -1}
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </NavLink>
        ))}
      </nav>

      <style>
        {`
          @media (min-width: 768px) {
            .hamburger {
              display: none !important;
            }
            .nav-links {
              display: flex !important;
              flex-direction: row !important;
              gap: 2rem !important;
              margin-top: 0 !important;
              width: auto !important;
              position: static !important;
              background: none !important;
              padding: 0 !important;
              align-items: center;
            }
          }
        `}
      </style>
    </nav>
  );
}
