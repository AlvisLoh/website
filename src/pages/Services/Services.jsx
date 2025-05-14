import React from 'react';
import NewFooter from '../../components/Footer';
import Navbar from '../../components/Navbar';

const styles = {
  page: {
    minHeight: '100vh',
    color: '#fff',
    fontFamily: 'sans-serif',
    padding: '40px 0',
  },
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    background: "#150a1f",
    borderRadius: '16px',
    boxShadow: '0 4px 24px rgba(0,0,0,0.2)',
    padding: '40px 32px',
  },
  heading: {
    color: '#eedd7f',
    fontSize: '2.5rem',
    fontWeight: 700,
    marginBottom: '16px',
    letterSpacing: '1px',
  },
  subheading: {
    color: '#fff',
    fontSize: '1.5rem',
    fontWeight: 600,
    marginTop: '32px',
    marginBottom: '8px',
  },
  text: {
    color: '#eedd7f',
    fontSize: '1.1rem',
    lineHeight: 1.7,
    marginBottom: '20px',
  },
  list: {
    color: '#fff',
    paddingLeft: '20px',
    marginBottom: '24px',
  },
  listItem: {
    marginBottom: '10px',
  },
};

const Services = () => (
  <>
  <Navbar />
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.heading}>Our Services</h1>
        <h2 style={styles.subheading}>Life Coaching</h2>
        <p style={styles.text}>
          Empower yourself to achieve your personal and professional goals. Our
          life coaching service provides:
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
          Navigate your educational journey with expert guidance. Our consulting
          includes:
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
          <span style={{ color: "#eedd7f", fontWeight: 600 }}>Contact us</span>{" "}
          to schedule a consultation.
        </p>
      </div>
    </div>
    <NewFooter />
  </>
);

export default Services;