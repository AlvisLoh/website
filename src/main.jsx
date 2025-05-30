import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./pages/App/App.jsx";
import BookSession from "./pages/BookSession/BookSession.jsx";
import { createHashRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About/About.jsx";
import Testimonials from "./pages/Testimonials/Testimonials.jsx";
import Services from "./pages/Services/Services.jsx";
import AboutCoaching from "./pages/AboutCoaching/AboutCoaching.jsx";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div style={{ color: "white" }}>404 Not Found</div>,
  },
  {
    path: "/book-a-session",
    element: <BookSession />,
  },
  {
    path:"/about",
    element: <About />
  },
  {
    path: "/services",
    element: <Services />
  },
  {
    path: "/testimonials",
    element: <Testimonials />
  },
  {
    path: "/my-coaching",
    element: <AboutCoaching />

  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
