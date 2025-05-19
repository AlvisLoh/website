import React from "react";
import portrait from "/alvis-portrait-sitting.jpeg";

// Responsive AboutHero: uses classNames for section and image, and injects a style tag for media queries
const AboutHero = () => (
  <>
    <style>{`
      .about-hero-section {
        background: #150a1f;
        color: #eedd7f;
        padding: 3rem 1.5rem;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        border-radius: 0;
        box-shadow: 0 8px 32px rgba(0,0,0,0.25);
        max-width: 900px;
        margin: 2rem auto;
        gap: 2.5rem;
      }
      .about-hero-img {
        width: 250px;
        height: 300px;
        object-fit: cover;
        border-radius: 0;
        border: none;
        margin-bottom: 0;
        box-shadow: none;
        background: #222;
      }
      @media (max-width: 700px) {
        .about-hero-section {
          flex-direction: column;
          align-items: center;
          padding: 2rem 1rem; /* Increased padding for mobile */
          gap: 1.5rem;
          margin: 1.5rem 1rem; /* Add margin for gap from screen edges */
        }
        .about-hero-img {
          width: 90vw;
          max-width: 320px;
          height: auto;
        }
        .about-hero-section h1 {
          font-size: 2rem;
        }
        .about-hero-section h2 {
          font-size: 1rem;
        }
        .about-hero-section h3 {
          font-size: 1rem;
        }
        .about-hero-section div[style*='max-width: 600px'] {
          max-width: 100%;
        }
      }
    `}</style>
    <section className="about-hero-section">
      <div style={{ flex: 1, maxWidth: 600 }}>
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: 700,
            margin: 0,
            color: "#eedd7f",
          }}
        >
          Alvis Loh
        </h1>
        <h2
          style={{
            fontSize: "1.25rem",
            fontWeight: 400,
            color: "#fff",
            margin: "0.25rem 0 1.5rem",
          }}
        >
          Life Coach &amp; Intelligence Officer
        </h2>

        <div style={{ maxWidth: 700 }}>
          <h3
            style={{
              fontSize: "1.15rem",
              fontWeight: 600,
              margin: "1.5rem 0 0.5rem",
              color: "#eedd7f",
            }}
          >
            Professional Profile
          </h3>
          <p style={{ margin: "0 0 1.5rem", color: "#fff" }}>
            <span style={{ fontWeight: 600, color: "#eedd7f" }}>
              Transforming Challenges Into Opportunities
            </span>
            <br />
            As a Certified Life Coach and Senior Military Intelligence Expert, I
            bring a unique combination of strategic thinking, emotional
            intelligence, and leadership experience to help individuals and
            organizations achieve their full potential.
          </p>

          <h3
            style={{
              fontSize: "1.15rem",
              fontWeight: 600,
              margin: "1.5rem 0 0.5rem",
              color: "#eedd7f",
            }}
          >
            Military Career
          </h3>
          <ul
            style={{
              listStyle: "disc inside",
              margin: "0 0 1.5rem",
              padding: 0,
              color: "#fff",
            }}
          >
            <li>ME-4 Intelligence Officer, DIS</li>
            <li>Specialized in cybersecurity &amp; data analytics</li>
            <li>Crisis management &amp; strategic planning</li>
          </ul>

          <h3
            style={{
              fontSize: "1.15rem",
              fontWeight: 600,
              margin: "1.5rem 0 0.5rem",
              color: "#eedd7f",
            }}
          >
            Education &amp; Skills
          </h3>
          <ul
            style={{
              listStyle: "disc inside",
              margin: "0 0 1.5rem",
              padding: 0,
              color: "#fff",
            }}
          >
            <li>Diploma in Business Management (Merit)</li>
            <li>Certified Professional Coach</li>
            <li>Leadership &amp; team development</li>
          </ul>

          <blockquote
            style={{
              fontStyle: "italic",
              color: "#fff",
              borderLeft: "4px solid #eedd7f",
              paddingLeft: "1rem",
              margin: "1.5rem 0",
            }}
          >
            "My approach combines military precision with compassionate coaching
            to help clients break through barriers and achieve extraordinary
            results."
          </blockquote>

          <h3
            style={{
              fontSize: "1.15rem",
              fontWeight: 600,
              margin: "1.5rem 0 0.5rem",
              color: "#eedd7f",
            }}
          >
            My Philosophy
          </h3>
          <p style={{ margin: "0 0 1.5rem", color: "#fff" }}>
            I believe true success comes from aligning purpose, potential, and
            performance. Whether navigating complex security challenges or
            personal growth journeys, the principles of clarity, resilience, and
            strategic action remain constant.
          </p>
          <p style={{ fontWeight: 600, color: "#eedd7f", margin: 0 }}>
            Let's collaborate to unlock your next level of achievement.
          </p>
        </div>
      </div>
      <div style={{ flexShrink: 0, display: "flex", alignItems: "flex-start" }}>
        <img
          src={portrait}
          alt="Alvis Loh Portrait"
          className="about-hero-img"
        />
      </div>
    </section>
  </>
);

export default AboutHero;
