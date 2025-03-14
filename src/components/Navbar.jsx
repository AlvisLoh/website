import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Alvis Loh</NavLink>
        </li>
        <li>
          <NavLink to="/book-a-session">Book a session</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        {/* <li>
          <NavLink>Blog</NavLink>
        </li>
        <li>
          <NavLink>Testimonials</NavLink>
        </li> */}
      </ul>
    </nav>
  );
}
