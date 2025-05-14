import React from 'react';
import NewFooter from '../../components/Footer';
import Navbar from '../../components/Navbar';
import { Link } from 'react-router-dom';

const AboutCoaching = () => {
  return (
    <>
      <Navbar />
      <div
        style={{
          minHeight: "100vh",
          color: "#fff",
          padding: "40px 0",
        }}
      >
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            background: "#150a1f",
            borderRadius: "16px",
            boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
            padding: "40px 32px",
          }}
        >
          <h1
            style={{
              color: "#eedd7f",
              fontSize: "2.5rem",
              marginBottom: "16px",
              fontWeight: 700,
              letterSpacing: "1px",
            }}
          >
            About My Coaching Services
          </h1>
          <p
            style={{
              fontSize: "1.2rem",
              lineHeight: 1.7,
              marginBottom: "24px",
            }}
          >
            I offer <span style={{ color: "#eedd7f" }}>life coaching</span> and{" "}
            <span style={{ color: "#eedd7f" }}>educational consulting</span>{" "}
            services designed to empower you to reach your personal, academic,
            and professional goals. My approach is compassionate, personalized,
            and results-oriented.
          </p>
          <h2
            style={{
              color: "#eedd7f",
              fontSize: "1.5rem",
              marginTop: "32px",
              marginBottom: "12px",
            }}
          >
            Life Coaching
          </h2>
          <p style={{ marginBottom: "20px" }}>
            Whether you’re seeking clarity, motivation, or a new direction, I
            provide guidance and support to help you overcome obstacles and
            unlock your full potential. Together, we’ll create actionable plans
            tailored to your unique journey.
          </p>
          <h2
            style={{
              color: "#eedd7f",
              fontSize: "1.5rem",
              marginTop: "32px",
              marginBottom: "12px",
            }}
          >
            Educational Consulting
          </h2>
          <p>
            I assist students and families in navigating educational pathways,
            from academic planning to college admissions. My consulting services
            are informed by years of experience and a deep understanding of the
            educational landscape.
          </p>
          <div
            style={{
              marginTop: "40px",
              textAlign: "center",
            }}
          >
            <Link
              to="/book-a-session"
              style={{
                background: "#eedd7f",
                color: "#150a1f",
                padding: "12px 32px",
                borderRadius: "8px",
                fontWeight: 600,
                textDecoration: "none",
                fontSize: "1.1rem",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              }}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
      <NewFooter />
    </>
  );
};

export default AboutCoaching;