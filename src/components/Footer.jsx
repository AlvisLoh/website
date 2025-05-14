export default function Footer() {
  // Handler functions for hover effects
  const handleMouseOver = (e) => {
    e.currentTarget.style.color = "#fff";
    e.currentTarget.style.transform = "translateX(4px)";
  };

  const handleMouseOut = (e) => {
    e.currentTarget.style.color = "#eedd7f";
    e.currentTarget.style.transform = "translateX(0)";
  };

  return (
    <footer
      style={{
        background: "#150a1f",
        color: "#eedd7f",
        padding: "3rem 1rem 1rem",
        fontFamily: "inherit",
        borderTop: "1px solid #eedd7f22",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "3rem",
        }}
      >
        {/* Main Content Row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "3rem",
            alignItems: "start",
          }}
        >
          {/* Brand Column */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <img
                src="logo.png"
                alt="Logo"
                style={{
                  height: "96px",
                  width: "96px",
                  objectFit: "contain",
                  border: "none",
                }}
              />
              <span
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "600",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Alvis Loh
              </span>
            </div>

            {/* Contact info aligned with logo */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                marginLeft: "112px", // 96px logo + 16px gap
              }}
            >
              <a
                href="tel:+65 8778 4263"
                style={{
                  color: "#eedd7f",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  width: "fit-content",
                }}
              >
                <span style={{ fontSize: "1.1rem" }}>📞</span>
                +65 8778 4263
              </a>
              <a
                href="mailto:alvis.loh.yx.6604@gmail.com"
                style={{
                  color: "#eedd7f",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  width: "fit-content",
                }}
              >
                <span style={{ fontSize: "1.1rem" }}>✉️</span>
                alvis.loh.yx.6604@gmail.com
              </a>
            </div>
          </div>

          {/* Social Links Column */}
          <div>
            <h3
              style={{
                color: "#fff",
                margin: "0 0 1rem 0",
                fontSize: "1.2rem",
                position: "relative",
                width: "fit-content",
              }}
            >
              Connect With Me
              <span
                style={{
                  position: "absolute",
                  bottom: "-4px",
                  left: "0",
                  width: "50%",
                  height: "2px",
                  background: "#eedd7f",
                  borderRadius: "2px",
                }}
              />
            </h3>

            <ul
              style={{
                listStyle: "none",
                padding: "0",
                margin: "0",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              {[
                { name: "LinkedIn", url: "https://www.linkedin.com/" },
                {
                  name: "Instagram",
                  url: "https://www.instagram.com/alvis_pelvis_loh/",
                },
                { name: "WhatsApp", url: "https://wa.me/6587784263" },
              ].map((social) => (
                <li key={social.name}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      color: "#eedd7f",
                      textDecoration: "none",
                      transition: "all 0.3s ease",
                      display: "inline-block",
                      fontSize: "1.05rem",
                    }}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                    onFocus={handleMouseOver}
                    onBlur={handleMouseOut}
                  >
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Additional Links Column */}
          <div>
            <h3
              style={{
                color: "#fff",
                margin: "0 0 1rem 0",
                fontSize: "1.2rem",
                position: "relative",
                width: "fit-content",
              }}
            >
              Quick Links
              <span
                style={{
                  position: "absolute",
                  bottom: "-4px",
                  left: "0",
                  width: "50%",
                  height: "2px",
                  background: "#eedd7f",
                  borderRadius: "2px",
                }}
              ></span>
            </h3>

            <ul
              style={{
                listStyle: "none",
                padding: "0",
                margin: "0",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              {[
                { name: "About Me", url: "#about" },
                { name: "Services", url: "#services" },
                { name: "Testimonials", url: "#testimonials" },
                { name: "Contact", url: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    style={{
                      color: "#eedd7f",
                      textDecoration: "none",
                      transition: "all 0.3s ease",
                      display: "inline-block",
                      fontSize: "1.05rem",
                    }}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                    onFocus={handleMouseOver}
                    onBlur={handleMouseOut}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright Section - Now in its own row */}
        <div
          style={{
            width: "100%",
            paddingTop: "1.5rem",
            borderTop: "1px solid #eedd7f22",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: "0.95rem", color: "#eedd7fbb" }}>
            &copy; {new Date().getFullYear()} Alvis Loh. All rights reserved.
          </div>
          <div style={{ fontSize: "0.85rem", color: "#eedd7fbb" }}>
            Crafted with passion in Singapore
          </div>
        </div>
      </div>
    </footer>
  );
}
