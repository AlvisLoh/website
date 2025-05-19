import React from "react";
import NewFooter from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";

const styles = {
  page: {
    minHeight: "100vh",
    color: "#fff",
    fontFamily: "sans-serif",
    padding: "40px 0",
    boxSizing: "border-box",
  },
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    background: "#150a1f",
    borderRadius: "16px",
    boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
    padding: "40px 32px",
    display: "flex",
    alignItems: "flex-start",
    gap: "32px",
    boxSizing: "border-box",
  },
  content: {
    flex: 1,
  },
  image: {
    width: "220px",
    borderRadius: "12px",
    objectFit: "cover",
    boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
  },
  heading: {
    color: "#eedd7f",
    fontSize: "2.5rem",
    fontWeight: 700,
    marginBottom: "16px",
    letterSpacing: "1px",
  },
  subheading: {
    color: "#fff",
    fontSize: "1.5rem",
    fontWeight: 600,
    marginTop: "32px",
    marginBottom: "8px",
  },
  text: {
    color: "#eedd7f",
    fontSize: "1.1rem",
    lineHeight: 1.7,
    marginBottom: "20px",
  },
  list: {
    color: "#fff",
    paddingLeft: "20px",
    marginBottom: "24px",
  },
  listItem: {
    marginBottom: "10px",
  },
};

const Services = () => (
  <>
    <Navbar />
    <div style={styles.page}>
      <div className="services-section" style={styles.container}>
        <div style={styles.content}>
          <h1 style={styles.heading} className="services-heading">
            Our Services
          </h1>
          <h2 style={styles.subheading}>Life Coaching</h2>
          <p style={styles.text}>
            Empower yourself to achieve your personal and professional goals.
            Our life coaching service provides:
          </p>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              Personalized goal setting and action plans
            </li>
            <li style={styles.listItem}>Mindset and motivation strategies</li>
            <li style={styles.listItem}>
              Support for overcoming obstacles and building confidence
            </li>
          </ul>
          <h2 style={styles.subheading}>Educational Consulting</h2>
          <p style={styles.text}>
            Navigate your educational journey with expert guidance. Our
            consulting includes:
          </p>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              Academic planning and course selection
            </li>
            <li style={styles.listItem}>
              College and university application support
            </li>
            <li style={styles.listItem}>Study skills and exam preparation</li>
          </ul>
          <p style={styles.text}>
            Ready to take the next step?{" "}
            <Link
              to="/book-a-session"
              style={{ color: "#eedd7f", fontWeight: 600 }}
            >
              Contact us
            </Link>{" "}
            to schedule a consultation.
          </p>
          {/* Mobile images (inside background, only visible on mobile) */}
          <div
            className="services-images mobile-images-inside"
            style={{
              display: "none",
              flexDirection: "column",
              gap: "24px",
              alignItems: "center",
              marginTop: "2.5rem",
            }}
          >
            <img
              src="alvis-sitting.jpg"
              alt="Alvis Sitting"
              className="services-image"
              style={styles.image}
            />
            <img
              src="alvis-listening.jpg"
              alt="Alvis listening"
              className="services-image"
              style={styles.image}
            />
          </div>
        </div>
        {/* Desktop images (default position) */}
        <div
          className="services-images desktop-images"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            alignItems: "center",
          }}
        >
          <img
            src="alvis-sitting.jpg"
            alt="Alvis Sitting"
            className="services-image"
            style={styles.image}
          />
          <img
            src="alvis-listening.jpg"
            alt="Alvis listening"
            className="services-image"
            style={styles.image}
          />
        </div>
      </div>
    </div>
    <style>{`
      @media (max-width: 700px) {
        .services-section {
          flex-direction: column !important;
        }
        .desktop-images {
          display: none !important;
        }
        .mobile-images-inside {
          display: flex !important;
        }
        .services-section {
          margin: 1.5rem 1rem !important;
          padding: 2rem 1rem !important;
          border-radius: 8px !important;
        }
        .services-images {
          flex-direction: column !important;
          gap: 16px !important;
          align-items: center;
        }
        .services-image {
          width: 90vw !important;
          max-width: 320px !important;
          min-width: 0 !important;
          height: auto !important;
        }
        .services-heading {
          font-size: 2rem !important;
        }
      }
    `}</style>
    <NewFooter />
  </>
);

export default Services;
