import React from "react";
import Navbar from "../../components/Navbar";
import NewFooter from "../../components/Footer";

const testimonialsData = [
  {
    name: "Jane Doe",
    text: "Alvis was fantastic to work with! Highly recommended.",
    company: "Acme Corp",
  },
  {
    name: "John Smith",
    text: "Professional, timely, and exceeded expectations.",
    company: "Smith Consulting",
  },
  {
    name: "Emily Lee",
    text: "Great communication and quality work.",
    company: "Lee Designs",
  },
  // Add or edit testimonials here
];

const styles = {
  page: {
    maxWidth: 700,
    margin: "40px auto",
    padding: "24px",
    fontFamily: "Segoe UI, Arial, sans-serif",
    background: "#150a1f",
    borderRadius: 12,
    boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
    boxSizing: "border-box",
  },
  heading: {
    textAlign: "center",
    marginBottom: 32,
    color: "#eedd7f", // gold
    letterSpacing: 1,
  },
  list: {
    display: "flex",
    flexDirection: "column",
    gap: 24,
  },
  card: {
    background: "#1e1130", // slightly lighter purple for card
    borderRadius: 10,
    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
    padding: "24px 28px",
    borderLeft: "5px solid #eedd7f", // gold
    transition: "box-shadow 0.2s",
  },
  text: {
    fontStyle: "italic",
    color: "#fff", // white
    fontSize: 18,
    marginBottom: 16,
    lineHeight: 1.5,
  },
  name: {
    color: "#eedd7f", // gold
    fontWeight: 600,
    fontSize: 16,
    marginTop: 0,
  },
};

const Testimonials = () => {
  return (
    <>
      <style>{`
        @media (max-width: 700px) {
          .testimonials-page {
            margin: 1.5rem 1rem !important;
            padding: 1.5rem 0.5rem !important;
            border-radius: 8px !important;
          }
          .testimonials-card {
            padding: 1.2rem 1rem !important;
            font-size: 1rem !important;
          }
          .testimonials-heading {
            font-size: 2rem !important;
          }
        }
      `}</style>
      <Navbar />
      <div style={styles.page} className="testimonials-page">
        <h1 style={styles.heading} className="testimonials-heading">
          Testimonials
        </h1>
        <div style={styles.list}>
          {testimonialsData.map((testimonial) => (
            <div
              style={styles.card}
              className="testimonials-card"
              key={`${testimonial.name}-${testimonial.company}`}
            >
              <p style={styles.text}>"{testimonial.text}"</p>
              <p style={styles.name}>
                <strong>{testimonial.name}</strong>, {testimonial.company}
              </p>
            </div>
          ))}
        </div>
      </div>
      <NewFooter />
    </>
  );
};

export default Testimonials;
