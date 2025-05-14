import React from "react";
import { Link } from "react-router-dom";

const NewFooter = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/alvis-loh/?originalSubdomain=sg",
    },
    { name: "Instagram", url: "https://www.instagram.com/alvis_pelvis_loh/" },
    { name: "WhatsApp", url: "https://wa.me/6587784263" },
  ];

  const quickLinks = [
    { name: "About Me", url: "#about" },
    { name: "Services", url: "#services" },
    { name: "Testimonials", url: "#testimonials" },
    { name: "Contact", url: "#contact" },
  ];

  // Responsive style helper
  function useResponsiveStyles(styles) {
    const [isMobile, setIsMobile] = React.useState(
      typeof window !== "undefined" && window.innerWidth <= 700
    );
    React.useEffect(() => {
      const onResize = () => {
        setIsMobile(window.innerWidth <= 700);
      };
      window.addEventListener("resize", onResize);
      return () => window.removeEventListener("resize", onResize);
    }, []);
    if (!styles['@media (max-width: 700px)']) return styles;
    if (isMobile) {
      // Merge mobile overrides
      const merged = { ...styles };
      for (const key in styles['@media (max-width: 700px)']) {
        merged[key] = { ...merged[key], ...styles['@media (max-width: 700px)'][key] };
      }
      return merged;
    }
    return styles;
  }

  const styles = {
    footer: {
      background: "#150a1f",
      color: "#eedd7f",
      padding: "3.5rem 1rem",
      fontFamily: "inherit",
      borderTop: "4px solid #eedd7f",
      minHeight: "340px",
      width: "100vw",
      boxSizing: "border-box",
    },
    container: {
      maxWidth: "1000px",
      margin: "0 auto",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: "2rem",
      width: "100%",
      flexWrap: "wrap",
    },
    column: {
      flex: "1 1 0",
      marginBottom: "1.5rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      minWidth: "220px",
    },
    brandRow: {
      display: "flex",
      alignItems: "center",
      gap: "1rem",
      marginBottom: "1rem",
      width: "100%",
    },
    logo: {
      height: "96px",
      width: "96px",
      objectFit: "contain",
      border: "none",
      background: "none",
      display: "block",
      alignSelf: "flex-start",
      flexShrink: 0,
    },
    brandText: {
      fontWeight: 700,
      fontSize: "1.2rem",
      marginBottom: 0,
      lineHeight: 1.2,
    },
    sectionTitle: {
      color: "#fff",
      marginBottom: "1rem",
      fontSize: "1.1rem",
      fontWeight: "600",
      letterSpacing: "0.5px",
    },
    linkList: {
      listStyle: "none",
      padding: 0,
      margin: 0,
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
    },
    navLink: {
      color: "#eedd7f",
      textDecoration: "none",
      fontSize: "1.1rem",
      borderRadius: "4px",
      padding: "0.5rem 0.7rem",
      transition: "background 0.2s, color 0.2s",
      display: "inline-block",
      minWidth: "44px", // for tap target
    },
    navLinkHover: {
      background: "#eedd7f33",
      color: "#fff",
    },
    copyright: {
      textAlign: "center",
      color: "#eedd7fbb",
      fontSize: "0.95rem",
      marginTop: "2rem",
    },
    contactRow: {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      marginBottom: "0.7rem",
    },
    // Responsive styles
    '@media (max-width: 700px)': {
      container: {
        flexDirection: "column",
        alignItems: "stretch",
        gap: "2rem",
        padding: 0,
      },
      column: {
        minWidth: "0",
        width: "100%",
        alignItems: "flex-start",
        marginBottom: "0.5rem",
      },
      footer: {
        padding: "2rem 0.5rem",
        minHeight: "auto",
        width: "100vw",
      },
      logo: {
        height: "64px",
        width: "64px",
      },
      navLink: {
        fontSize: "1rem",
        padding: "0.7rem 1rem",
      },
      sectionTitle: {
        fontSize: "1rem",
      },
    },
  };

  const responsiveStyles = useResponsiveStyles(styles);

  // Simple hover effect using React state
  const [hovered, setHovered] = React.useState({});

  const handleHover = (key, isHover) => {
    setHovered((prev) => ({ ...prev, [key]: isHover }));
  };

  return (
    <footer style={responsiveStyles.footer}>
      <div style={responsiveStyles.container}>
        <div style={responsiveStyles.column}>
          <div style={responsiveStyles.brandRow}>
            <Link to="/" style={{ display: "block" }}>
              <img
                src="logo.png"
                alt="Logo"
                style={responsiveStyles.logo}
              />
            </Link>
          </div>
          <div style={responsiveStyles.contactRow}>
            <a href="tel:+6587784263" style={responsiveStyles.navLink}>
              📞 +65 8778 4263
            </a>
          </div>
          <div style={responsiveStyles.contactRow}>
            <span>✉️</span>
            <a href="mailto:alvis.loh.yx.6604@gmail.com" style={responsiveStyles.navLink}>
              alvis.loh.yx.6604@gmail.com
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div style={responsiveStyles.column}>
          <div style={responsiveStyles.sectionTitle}>Connect With Me</div>
          <ul style={responsiveStyles.linkList}>
            {socialLinks.map((social) => (
              <li key={social.name}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    ...responsiveStyles.navLink,
                    ...(hovered[social.name] ? responsiveStyles.navLinkHover : {}),
                  }}
                  onMouseOver={() => handleHover(social.name, true)}
                  onMouseOut={() => handleHover(social.name, false)}
                  onFocus={() => handleHover(social.name, true)}
                  onBlur={() => handleHover(social.name, false)}
                >
                  {social.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div style={responsiveStyles.column}>
          <div style={responsiveStyles.sectionTitle}>Quick Links</div>
          <ul style={responsiveStyles.linkList}>
            {quickLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.url}
                  style={{
                    ...responsiveStyles.navLink,
                    ...(hovered[link.name] ? responsiveStyles.navLinkHover : {}),
                  }}
                  onMouseOver={() => handleHover(link.name, true)}
                  onMouseOut={() => handleHover(link.name, false)}
                  onFocus={() => handleHover(link.name, true)}
                  onBlur={() => handleHover(link.name, false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default NewFooter;