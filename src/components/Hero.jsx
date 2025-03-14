import { NavLink } from "react-router-dom";

export default function Hero() {
  return (
    <div id="hero">
      <h1>Coaching, education consulting, and networking</h1>
      <p>Get advice from a certified coach</p>
      <button type="submit">
        <NavLink to="/book-a-session">Book a session</NavLink>
      </button>
    </div>
  );
}