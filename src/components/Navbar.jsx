import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      style={{
        background: "#150a1f",
        height: "80px", // Reduced height for better proportions
        display: "flex",
        alignItems: "center",
        padding: "3% 5%", // Consistent padding on both sides
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      {/* Logo - positioned absolutely or flex item */}
      <div
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <NavLink to="/">
          <img
            src="logo.png"
            alt="Logo"
            style={{
              borderRadius: "50%",
              width: "60px",
              height: "60px",
              objectFit: "contain",
              display: "block",
              border: "none", // Ensure no border is applied
            }}
          />
        </NavLink>
      </div>

      {/* Navigation links - positioned to the right */}
      <div
        style={{
          marginLeft: "auto",
          display: "flex",
          gap: "2rem",
          alignItems: "center",
          height: "100%",
        }}
      >
        <NavLink
          to="/book-a-session"
          style={({ isActive }) => ({
            color: "#eedd7f",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "1rem",
            borderBottom: isActive ? "2px solid #fff" : "none",
            paddingBottom: "10px",
            transition: "border-bottom 0.2s",
            height: "100%",
            display: "flex",
            alignItems: "center",
          })}
        >
          Book a session
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => ({
            color: "#eedd7f",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "1rem",
            borderBottom: isActive ? "2px solid #fff" : "none",
            paddingBottom: "10px",
            transition: "border-bottom 0.2s",
            height: "100%",
            display: "flex",
            alignItems: "center",
          })}
        >
          About
        </NavLink>
      </div>
    </nav>
  );
}