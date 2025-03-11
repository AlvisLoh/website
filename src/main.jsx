import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./pages/App/App.jsx";
import BookSession from "./pages/BookSession/BookSession.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About/About.jsx";

const router = createBrowserRouter([
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
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
