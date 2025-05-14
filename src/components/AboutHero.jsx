import React from "react";
import portrait from "/portrait.jpg";

const AboutHero = () => (
  <section
    style={{
      background: "#150a1f",
      color: "#eedd7f",
      padding: "3rem 1.5rem",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      borderRadius: 0,
      boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
      maxWidth: 900,
      margin: "2rem auto",
      gap: "2.5rem",
    }}
  >
    <div style={{ flex: 1, maxWidth: 600 }}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: 700, margin: 0, color: "#eedd7f" }}>Alvis Loh</h1>
      <h2 style={{ fontSize: "1.25rem", fontWeight: 400, color: "#fff", margin: "0.25rem 0 1.5rem" }}>
        Life Coach &amp; Intelligence Officer
      </h2>

      <div style={{ maxWidth: 700 }}>
        <h3 style={{ fontSize: "1.15rem", fontWeight: 600, margin: "1.5rem 0 0.5rem", color: "#eedd7f" }}>
          Professional Profile
        </h3>
        <p style={{ margin: "0 0 1.5rem", color: "#fff" }}>
          <span style={{ fontWeight: 600, color: "#eedd7f" }}>Transforming Challenges Into Opportunities</span>
          <br />
          As a Certified Life Coach and Senior Military Intelligence Expert, I bring a unique combination of strategic thinking, emotional intelligence, and leadership experience to help individuals and organizations achieve their full potential.
        </p>

        <h3 style={{ fontSize: "1.15rem", fontWeight: 600, margin: "1.5rem 0 0.5rem", color: "#eedd7f" }}>
          Military Career
        </h3>
        <ul style={{ listStyle: "disc inside", margin: "0 0 1.5rem", padding: 0, color: "#fff" }}>
          <li>ME-4 Intelligence Officer, DIS</li>
          <li>Specialized in cybersecurity &amp; data analytics</li>
          <li>Crisis management &amp; strategic planning</li>
        </ul>

        <h3 style={{ fontSize: "1.15rem", fontWeight: 600, margin: "1.5rem 0 0.5rem", color: "#eedd7f" }}>
          Education &amp; Skills
        </h3>
        <ul style={{ listStyle: "disc inside", margin: "0 0 1.5rem", padding: 0, color: "#fff" }}>
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
          "My approach combines military precision with compassionate coaching to help clients break through barriers and achieve extraordinary results."
        </blockquote>

        <h3 style={{ fontSize: "1.15rem", fontWeight: 600, margin: "1.5rem 0 0.5rem", color: "#eedd7f" }}>
          My Philosophy
        </h3>
        <p style={{ margin: "0 0 1.5rem", color: "#fff" }}>
          I believe true success comes from aligning purpose, potential, and performance. Whether navigating complex security challenges or personal growth journeys, the principles of clarity, resilience, and strategic action remain constant.
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
        style={{
          width: 220,
          height: 220,
          objectFit: "cover",
          borderRadius: 0,
          border: "none",
          marginBottom: 0,
          boxShadow: "none",
          background: "#222",
        }}
      />
    </div>
  </section>
);

export default AboutHero;